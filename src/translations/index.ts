import { LangEnum } from '$models/langs.enum';
import lang from '$translations/lang.json';
import i18n from '@sveltekit-i18n/base';
import parser from '@sveltekit-i18n/parser-default';

import type { Config } from '@sveltekit-i18n/parser-default';

const files = [
	{
		key: 'common'
	},
	{
		key: 'error',
		routes: ['error']
	}
];

export const config: Config = {
	translations: {
		en: { lang },
		fr: { lang }
	},
	parser: parser(),
	loaders: [LangEnum.fr_FR, LangEnum.en_GB].flatMap((langEnum) =>
		files.map(({ key, routes }) => ({
			locale: langEnum,
			key,
			...(routes ? { routes } : {}),
			loader: async () => (await import(`./${langEnum}/${key}.json`)).default
		}))
	)
};

export const defaultLocale = LangEnum.fr_FR;

export const { t, locale, locales, loading, loadTranslations, getTranslationProps } = new i18n(
	config
);
