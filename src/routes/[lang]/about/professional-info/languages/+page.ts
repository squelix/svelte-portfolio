/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call */
import { GET_LANGUAGES_QUERY } from '$graphql/languages';
import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { client } from '$stores/graphql';
import { languages } from '$stores/languages';
import { setSubNavItem } from '$stores/nav';
import { get } from 'svelte/store';

import type { GetLanguagesQuery, GetLanguagesQueryVariables } from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let languagesFetch;

	try {
		const { data } = await get(client)
			.query<GetLanguagesQuery, GetLanguagesQueryVariables>(GET_LANGUAGES_QUERY, {
				locale: lang
			})
			.toPromise();

		languagesFetch = data;
	} catch (error) {
		console.error(error);
	}

	languages.set(languagesFetch);
	setSubNavItem(ProfessionalInfoNavItemEnum.Languages);

	return { languages: languagesFetch };
};
