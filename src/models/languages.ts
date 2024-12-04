import { generateUnicodeBar } from '$lib/unicode-bar';

import type { GetLanguagesQuery } from '$models/graphql-generated';

export const getLanguagesList = (languages: GetLanguagesQuery | undefined) =>
	(languages?.languages?.data ?? []).map((language) => language.attributes);

export const getLanguagesListBars = (languages: GetLanguagesQuery | undefined) =>
	getLanguagesList(languages)
		.filter((language) => !!language)
		.map((language) => {
			if (!language) {
				return undefined;
			}
			const bar = generateUnicodeBar(language.percentage);
			if (!bar) {
				return undefined;
			}
			return `${language.name} : \n${bar} (${language.percentage}%)`;
		})
		.filter((language) => !!language) as string[];
