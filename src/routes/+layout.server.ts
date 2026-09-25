import { getProfile } from '$lib/api/profile/webservice';
import { createI18n } from '$translations';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url: { pathname }, fetch }) => {
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	// Per-request instance: a module-level singleton would leak one visitor's locale into another's page.
	const i18n = createI18n();
	const [profile] = await Promise.all([
		getProfile(lang, fetch),
		i18n.loadTranslations(lang, route)
	]);

	return {
		route,
		lang,
		profile,
		translations: i18n.snapshot()
	};
};
