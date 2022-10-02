/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call */
import { GET_SKILLS_QUERY } from '$graphql/skills';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type { GetSkillsQuery, GetSkillsQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let skills;

	try {
		const { data } = await get(client)
			.query<GetSkillsQuery, GetSkillsQueryVariables>(GET_SKILLS_QUERY, {
				locale: lang
			})
			.toPromise();

		skills = data;
	} catch (error) {
		console.error(error);
	}

	return { skills };
};
