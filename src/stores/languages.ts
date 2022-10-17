/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unused-vars */
import { generateUnicodeBar } from '$lib/unicode-bar';
import { derived, writable } from 'svelte/store';

import type { GetLanguagesQuery } from '$models/graphql-generated';

export const languages = writable<GetLanguagesQuery | undefined>();

export const languagesList = derived(languages, ($languages) =>
	($languages?.languages?.data ?? []).map((language) => language.attributes)
);

export const languagesListBars = derived(
	languagesList,
	($languagesList) =>
		$languagesList
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
			.filter((language) => !!language) as string[]
);
