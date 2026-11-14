import { BYPASS_TOKEN } from '$app/env/private';

import type { Config } from '@sveltejs/adapter-vercel';

// Route `config` exports are shallow-merged, so any route overriding `isr` must spread this object.
export const isrConfig: Exclude<NonNullable<Config['isr']>, false> = {
	expiration: 3600,
	bypassToken: BYPASS_TOKEN
};

// CDN caching for responses that never come from an ISR function (non-ISR pages, `+server.ts`
// redirects, unmatched 404s). Never set these on ISR pages: Vercel manages their Cache-Control.
export const cdnCacheHeaders = {
	'Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'Vercel-CDN-Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'CDN-Cache-Control': 's-maxage=86400, stale-while-revalidate=86400'
};
