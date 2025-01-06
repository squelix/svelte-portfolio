import { generateUnicodeBar } from '$lib/unicode-bar';

import type { Language } from './language';

export const getLanguagesListBars = (languages: Language[]) =>
	languages
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
