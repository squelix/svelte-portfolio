/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call */
import { GET_SCHOOLS_QUERY } from '$graphql/schools';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type { GetSchoolsQuery, GetSchoolsQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let schools;

	try {
		const data = await get(client).request<GetSchoolsQuery, GetSchoolsQueryVariables>(
			GET_SCHOOLS_QUERY,
			{
				locale: lang
			}
		);

		schools = data;
	} catch (error) {
		console.error(error);
	}

	return { schools };
};
