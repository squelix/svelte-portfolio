import { LangEnum } from '$models/langs.enum';
import lang from '$translations/lang.json';
import i18n from '@sveltekit-i18n/base';
import parser from '@sveltekit-i18n/parser-default';

import type { Config } from '@sveltekit-i18n/parser-default';

export const config: Config = {
	translations: {
		en: { lang },
		fr: { lang }
	},
	parser: parser(),
	loaders: [
		{
			locale: LangEnum.fr_FR,
			key: 'common',
			loader: async () => (await import('./fr/common.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'error',
			routes: ['error'],
			loader: async () => (await import('./fr/error.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'error',
			routes: ['error'],
			loader: async () => (await import('./en/error.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'home',
			routes: [''],
			loader: async () => (await import('./fr/home.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'home',
			routes: [''],
			loader: async () => (await import('./en/home.json')).default
		}
	]
};

export const defaultLocale = LangEnum.fr_FR;

export const { t, locale, locales, loading, loadTranslations, getTranslationProps } = new i18n(
	config
);
