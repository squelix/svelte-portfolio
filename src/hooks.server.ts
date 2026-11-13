import { VERCEL_ENV, VITE_VERCEL_ENV } from '$app/env/private';
import { getLangRedirect, splitLangPath } from '#lib/lang/utils.js';
import { cdnCacheHeaders } from '#lib/server/isr.js';
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

function applySecurityHeaders(response: Response): Response {
	for (const [header, value] of Object.entries(securityHeaders)) {
		response.headers.set(header, value);
	}
	return response;
}

function applyCacheHeaders(response: Response): Response {
	for (const [header, value] of Object.entries(cdnCacheHeaders)) {
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

	const { lang } = splitLangPath(pathname);

	if (AcceptedLanguages.includes(lang as LangEnum)) {
		const response = await resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace('%lang%', lang).replace('%umami%', getUmamiScript())
		});
		// ISR pages get their Cache-Control from Vercel. A path that matches no route can't be served
		// by an ISR function, so its 404 keeps the CDN cache; non-ISR routes set their own headers.
		if (event.route.id === null) {
			applyCacheHeaders(response);
		}
		return applySecurityHeaders(response);
	}

	const { status, location, vary } = getLangRedirect(
		pathname,
		url.search,
		request.headers.get('accept-language')
	);
	const headers = new Headers({ Location: location });
	if (vary) {
		headers.set('Vary', vary);
	}
	return applySecurityHeaders(new Response(undefined, { status, headers }));
};
