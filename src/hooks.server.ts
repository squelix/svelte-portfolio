import { VERCEL_ENV, VITE_VERCEL_ENV } from '$app/env/private';
import { getLanguage } from '#lib/lang/utils.js';
import { AcceptedLanguages, type LangEnum } from '#models/langs.enum.js';

import type { Handle } from '@sveltejs/kit/hooks';

const UMAMI_SCRIPT =
	'<script defer src="https://cloud.umami.is/script.js" data-website-id="3205f35c-3290-47ae-9a5b-0e5ede38a303"></script>';

function getUmamiScript(): string {
	const vercelEnv = VERCEL_ENV ?? VITE_VERCEL_ENV;
	return vercelEnv === 'production' ? UMAMI_SCRIPT : '';
}

const securityHeaders = {
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'X-DNS-Prefetch-Control': 'on',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

const cacheHeaders = {
	'Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'Vercel-CDN-Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'CDN-Cache-Control': 's-maxage=86400, stale-while-revalidate=86400'
};

function applySecurityHeaders(response: Response): Response {
	for (const [header, value] of Object.entries(securityHeaders)) {
		response.headers.set(header, value);
	}
	return response;
}

function applyCacheHeaders(response: Response): Response {
	for (const [header, value] of Object.entries(cacheHeaders)) {
		response.headers.set(header, value);
	}
	return response;
}

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event;
	const { pathname } = url;

	if (/^\/(robots\.txt|sitemap\.xml|llms\.txt)\/?$/.test(pathname)) {
		return applyCacheHeaders(applySecurityHeaders(await resolve(event)));
	}

	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	if (AcceptedLanguages.includes(lang as unknown as LangEnum)) {
		const response = await resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace('%lang%', lang).replace('%umami%', getUmamiScript())
		});
		return applyCacheHeaders(applySecurityHeaders(response));
	}

	const redirect = new Response(undefined, {
		status: 301,
		headers: {
			Location: `/${getLanguage(request.headers.get('accept-language'))}${route}`
		}
	});
	return applySecurityHeaders(redirect);
};
