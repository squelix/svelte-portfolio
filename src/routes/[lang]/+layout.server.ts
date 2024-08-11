import { GET_PROFILE_QUERY } from '$graphql/profile';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type { GetProfileQuery, GetProfileQueryVariables } from '$models/graphql-generated';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, fetch }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	let profile;

	try {
		const { data } = await get(client)
			.query<GetProfileQuery, GetProfileQueryVariables>(
				GET_PROFILE_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		profile = data;
	} catch (error) {
		console.error(error);
	}

	return { route, lang, profile };
};
