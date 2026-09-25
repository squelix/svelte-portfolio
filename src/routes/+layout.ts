import { browser } from '$app/environment';
import { createI18n, type AppI18n } from '$translations';
import dayjs from 'dayjs';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';
import localeData from 'dayjs/plugin/localeData.js';
import updateLocale from 'dayjs/plugin/updateLocale.js';

import type { LayoutLoad } from './$types';

let client: AppI18n | undefined;

export const load: LayoutLoad = async ({ data: { lang, route, profile, translations } }) => {
	let i18n = client;

	if (!i18n) {
		i18n = createI18n();
		i18n.addTranslations(translations);
		if (browser) client = i18n;
	}

	await i18n.loadTranslations(lang, route);

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

	return { lang, route, profile, i18n };
};
