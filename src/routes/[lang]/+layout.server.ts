/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { GET_PROFILE_QUERY } from '$graphql/profile';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type { GetProfileQuery, GetProfileQueryVariables } from '$models/graphql-generated';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	let profile;

	try {
		const { data } = await get(client).query<GetProfileQuery, GetProfileQueryVariables>({
			query: GET_PROFILE_QUERY,
			variables: {
				locale: lang
			}
		});

		profile = data;
	} catch (error) {
		console.error(error);
	}

	return { route, lang, profile };
};
