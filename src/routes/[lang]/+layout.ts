import { loadTranslations } from '$translations';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';

import type { Config } from '@sveltejs/adapter-vercel';
import type { LayoutLoad } from './$types';

export const config: Config = {
	runtime: 'edge'
};

export const load: LayoutLoad = async ({ data: { route, lang, profile } }) => {
	await loadTranslations(lang, route);
	return { profile, route, lang };
};
