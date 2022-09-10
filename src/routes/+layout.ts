/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import dayjs from 'dayjs';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';
import localeData from 'dayjs/plugin/localeData.js';

import type { LayoutLoad } from './$types';

export const prerender = 'auto';

export const load: LayoutLoad = ({ data }) => {
	dayjs.extend(localeData);
	dayjs.locale(data.lang);
	return data;
};
