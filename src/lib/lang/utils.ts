import { RouteQueryParams, Routes, type RoutesEnum } from '#lib/routing.js';
import { AcceptedLanguages, DEFAULT_LANG, type LangEnum } from '#models/langs.enum.js';
import { parse } from 'accept-language-parser';

export const getLanguage = (acceptLanguage?: string | null): string =>
	(
		parse(acceptLanguage ?? DEFAULT_LANG)
			.filter((langs) => AcceptedLanguages.includes(langs.code.toLowerCase() as LangEnum))
			.sort((a, b) => b.quality - a.quality)
			.shift()?.code ?? DEFAULT_LANG
	)
		.toString()
		.toLowerCase();

/** `/fr/projects` → `{ lang: 'fr', route: '/projects' }`. String ops only: the URL never ends up in a RegExp. */
export const splitLangPath = (pathname: string): { lang: string; route: string } => {
	const lang = pathname.split('/')[1] ?? '';
	return { lang, route: pathname.slice(lang.length + 1) };
};

// First segments of the app's pages (`about`, `projects`…), to spot paths that lack a language prefix.
const pageSegments = new Set(
	Object.values(Routes)
		.map((route) => route.split('/')[1])
		.filter(Boolean)
);

/**
 * Query to put in a cached redirect from a path whose route (language prefix stripped) is `route`.
 * ISR caches that redirect per path + the matched route's `allowQuery` params, so only those params
 * may be forwarded: any other param would be frozen into the cached Location for every visitor.
 */
const cacheSafeQuery = (route: string, search: string): string => {
	const routeKey = (Object.keys(Routes) as RoutesEnum[]).find((key) => Routes[key] === route);
	const allowed = (routeKey && RouteQueryParams[routeKey]) || [];
	const query = new URLSearchParams(
		[...new URLSearchParams(search)].filter(([name]) => allowed.includes(name))
	).toString();
	return query ? `?${query}` : '';
};

export interface LangRedirect {
	status: 301 | 302;
	location: string;
	vary?: string;
}

/**
 * Where to send a request whose first segment isn't an accepted language.
 *
 * Only `/` (served by the non-ISR catch-all, never cached) may depend on Accept-Language and forward
 * its whole query. Any other path can match a `[lang]` ISR route, and Vercel ISR caches the redirect
 * for every visitor, so it must be derived from the path and the cache-key params alone.
 */
export const getLangRedirect = (
	pathname: string,
	search: string,
	acceptLanguage: string | null
): LangRedirect => {
	if (pathname === '/') {
		return {
			status: 302,
			location: `/${getLanguage(acceptLanguage)}${search}`,
			vary: 'Accept-Language'
		};
	}

	const { lang, route } = splitLangPath(pathname);
	// The first segment is matched as `[lang]`, so the cache key is the one of `route`'s page.
	const query = cacheSafeQuery(route, search);

	// Case or region variant of an accepted language: `/FR`, `/fr-FR`, `/en_gb`…
	const variant = AcceptedLanguages.find(
		(accepted) => accepted === lang.toLowerCase().split(/[-_]/)[0]
	);
	if (variant) {
		return { status: 301, location: `/${variant}${route}${query}` };
	}

	// No language prefix (`/projects`): keep the whole path.
	if (pageSegments.has(lang)) {
		return { status: 301, location: `/${DEFAULT_LANG}${pathname}${query}` };
	}

	// Unknown language prefix (`/de/projects`): replace it.
	return { status: 301, location: `/${DEFAULT_LANG}${route}${query}` };
};
