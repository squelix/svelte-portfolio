/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { profile } from '$stores/profile';
import { loadTranslations } from '$translations';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	profile.set(data.profile);
	await loadTranslations(data.lang, data.route);
	return data;
};
