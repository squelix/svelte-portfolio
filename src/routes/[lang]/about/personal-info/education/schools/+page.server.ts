import { GET_SCHOOLS_QUERY } from '$graphql/schools';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type { GetSchoolsQuery, GetSchoolsQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let schools;

	try {
		const { data } = await get(client)
			.query<GetSchoolsQuery, GetSchoolsQueryVariables>(
				GET_SCHOOLS_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		schools = data;
	} catch (error) {
		console.error(error);
	}

	return { schools };
};
