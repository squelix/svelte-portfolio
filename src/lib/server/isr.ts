import { BYPASS_TOKEN } from '$app/env/private';

import type { Config } from '@sveltejs/adapter-vercel';

// Route `config` exports are shallow-merged, so any route overriding `isr` must spread this object.
export const isrConfig: Exclude<NonNullable<Config['isr']>, false> = {
	expiration: 3600,
	bypassToken: BYPASS_TOKEN
};
