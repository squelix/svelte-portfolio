import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import dayjs from 'dayjs';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';
import localeData from 'dayjs/plugin/localeData.js';
import updateLocale from 'dayjs/plugin/updateLocale.js';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data: { lang, route, profile } }) => {
	inject({ mode: dev ? 'development' : 'production' });

	dayjs.extend(localeData);
	dayjs.extend(updateLocale);
	dayjs.locale(lang);
	dayjs.updateLocale('en', {
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
	});
	dayjs.updateLocale('fr', {
		months: [
			'Janvier',
			'Février',
			'Mars',
			'Avril',
			'Mai',
			'Juin',
			'Juillet',
			'Août',
			'Septembre',
			'Octobre',
			'Novembre',
			'Décembre'
		]
	});

	return { lang, route, profile };
};
