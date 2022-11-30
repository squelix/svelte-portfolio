/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions */
import { GET_HOBBIES_QUERY } from '$graphql/hobbies';
import { PersonalInfoNavItemEnum } from '$lib/menu/personal-info-nav-item.enum';
import { client } from '$stores/graphql';
import { hobbies } from '$stores/hobbies';
import { itemSelected } from '$stores/nav';
import { get } from 'svelte/store';

import type { GetHobbiesQuery, GetHobbiesQueryVariables } from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let hobbiesFetch;

	try {
		const { data } = await get(client)
			.query<GetHobbiesQuery, GetHobbiesQueryVariables>(GET_HOBBIES_QUERY, {
				locale: lang
			})
			.toPromise();

		hobbiesFetch = data;
	} catch (error) {
		console.error(error);
	}

	itemSelected.set(PersonalInfoNavItemEnum.Hobbies);
	hobbies.set(hobbiesFetch);

	return { hobbies: hobbiesFetch };
};
