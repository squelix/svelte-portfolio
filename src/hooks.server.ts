import { getLanguage } from '$lib/lang/utils';
import { AcceptedLanguages, type LangEnum } from '$models/langs.enum';
import { locales } from '$translations';

import type { Handle } from '@sveltejs/kit';

const securityHeaders = {
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'X-DNS-Prefetch-Control': 'on',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
	'Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'Vercel-CDN-Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'CDN-Cache-Control': 's-maxage=86400, stale-while-revalidate=86400'
};

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event;
	const { pathname } = url;

	const response = await resolve(event);

	for (const [header, value] of Object.entries(securityHeaders)) {
		if (!response.headers.has(header)) {
			response.headers.set(header, value);
		}
	}

	if (['robots.txt', 'sitemap.xml'].some((path) => pathname.includes(path))) {
		return response;
	}

	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	// If this request is a route request
	if (AcceptedLanguages.includes(lang as unknown as LangEnum)) {
		// Get defined locales
		const supportedLocales = locales.get();

		// Get locale from `pathname`.
		const locale: string = supportedLocales.find((l) => pathname.startsWith(`/${l}`))!;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', locale)
		});
	}

	return new Response(undefined, {
		status: 301,
		headers: {
			Location: `/${getLanguage(request.headers.get('accept-language'))}${route}`
		}
	});
};
