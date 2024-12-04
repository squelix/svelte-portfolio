import { GET_LANGUAGES_QUERY } from '$graphql/languages';
import { client } from '$stores/graphql';

import type { GetLanguagesQuery, GetLanguagesQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let languages;

	try {
		const { data } = await client
			.query<GetLanguagesQuery, GetLanguagesQueryVariables>(
				GET_LANGUAGES_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		languages = data;
	} catch (error) {
		console.error(error);
	}

	return { languages };
};
