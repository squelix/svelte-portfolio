/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { GET_PROFILE_QUERY } from '$graphql/profile';
import { client } from '$stores/graphql';
import { profile } from '$stores/profile';
import { loadTranslations } from '$translations';
import dayjs from 'dayjs';
import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';
import localeData from 'dayjs/plugin/localeData.js';
import { get } from 'svelte/store';

import type { GetProfileQuery, GetProfileQueryVariables } from '$models/graphql-generated';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	dayjs.extend(localeData);
	dayjs.locale(lang);

	try {
		const { data } = await get(client).query<GetProfileQuery, GetProfileQueryVariables>({
			query: GET_PROFILE_QUERY,
			variables: {
				locale: lang
			}
		});
		profile.set(data);
	} catch (error: any) {
		console.error(error);
	}

	await loadTranslations(lang, route);
	return { route, lang };
};
