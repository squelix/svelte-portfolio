/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call */
import { GET_LANGUAGES_QUERY } from '$graphql/languages';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type { GetLanguagesQuery, GetLanguagesQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let languages;

	try {
		const { data } = await get(client)
			.query<GetLanguagesQuery, GetLanguagesQueryVariables>(GET_LANGUAGES_QUERY, {
				locale: lang
			})
			.toPromise();

		languages = data;
	} catch (error) {
		console.error(error);
	}

	return { languages };
};
