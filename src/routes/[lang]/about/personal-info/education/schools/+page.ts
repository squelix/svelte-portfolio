/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call */
import { GET_SCHOOLS_QUERY } from '$graphql/schools';
import { client } from '$stores/graphql';
import { schools } from '$stores/schools';
import { get } from 'svelte/store';

import type { GetSchoolsQuery, GetSchoolsQueryVariables } from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let schoolsFetch;

	try {
		const { data } = await get(client)
			.query<GetSchoolsQuery, GetSchoolsQueryVariables>(GET_SCHOOLS_QUERY, {
				locale: lang
			})
			.toPromise();

		schoolsFetch = data;
	} catch (error) {
		console.error(error);
	}

	schools.set(schoolsFetch);
	return { schools: schoolsFetch };
};
