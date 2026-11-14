import { getProfile } from '#lib/api/profile/webservice.js';
import { splitLangPath } from '#lib/lang/utils.js';
import { createI18n } from '#translations';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url: { pathname }, fetch }) => {
	const { lang, route } = splitLangPath(pathname);

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
