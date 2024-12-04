import { GET_HOBBIES_QUERY } from '$graphql/hobbies';
import { client } from '$stores/graphql';

import type { GetHobbiesQuery, GetHobbiesQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let hobbies;

	try {
		const { data } = await client
			.query<GetHobbiesQuery, GetHobbiesQueryVariables>(
				GET_HOBBIES_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		hobbies = data;
	} catch (error) {
		console.error(error);
	}

	return { hobbies };
};
