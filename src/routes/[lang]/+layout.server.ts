import { isrConfig } from '#lib/server/isr.js';

import type { Config } from '@sveltejs/adapter-vercel';
import type { LayoutServerLoad } from './$types';

// Applies ISR to every page under [lang]; +server.ts endpoints don't inherit layout config.
export const config: Config = { isr: isrConfig };

export const load: LayoutServerLoad = async ({ url: { pathname }, parent }) => {
	return {
		route: await parent().then(({ lang }) => pathname.replace(new RegExp(`^/${lang}`), '')),
		lang: await parent().then(({ lang }) => lang),
		profile: await parent().then(({ profile }) => profile)
	};
};
