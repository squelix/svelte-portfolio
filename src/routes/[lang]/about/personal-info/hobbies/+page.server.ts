/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions */
import { GET_HOBBIES_QUERY } from '$graphql/hobbies';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type { GetHobbiesQuery, GetHobbiesQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let hobbies;

	try {
		const { data } = await get(client)
			.query<GetHobbiesQuery, GetHobbiesQueryVariables>(GET_HOBBIES_QUERY, {
				locale: lang
			})
			.toPromise();

		hobbies = data;
	} catch (error) {
		console.error(error);
	}

	return { hobbies };
};
