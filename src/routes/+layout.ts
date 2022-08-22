/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { profile } from '$stores/profile';
import { loadTranslations } from '$translations';
import dayjs from 'dayjs';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';
import localeData from 'dayjs/plugin/localeData.js';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	dayjs.extend(localeData);
	dayjs.locale(data.lang);

	profile.set(data.profile);

	await loadTranslations(data.lang, data.route);
	return data;
};
