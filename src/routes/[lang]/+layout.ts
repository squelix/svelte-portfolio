/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { GET_PROFILE_QUERY } from '$graphql/profile';
import { client } from '$stores/graphql';
import { profile } from '$stores/profile';
import { loadTranslations } from '$translations';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';
import { get } from 'svelte/store';

import type { GetProfileQuery, GetProfileQueryVariables } from '$models/graphql-generated';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	let profileFetch;

	try {
		const { data } = await get(client)
			.query<GetProfileQuery, GetProfileQueryVariables>(GET_PROFILE_QUERY, {
				locale: lang
			})
			.toPromise();

		profileFetch = data;
	} catch (error) {
		console.error(error);
	}

	profile.set(profileFetch);
	await loadTranslations(lang, route);

	return { route, lang, profile: profileFetch };
};
