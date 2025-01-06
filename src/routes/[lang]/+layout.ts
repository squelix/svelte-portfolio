import { loadTranslations } from '$translations';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data: { route, lang, profile } }) => {
	await loadTranslations(lang, route);
	return { profile, route, lang };
};
