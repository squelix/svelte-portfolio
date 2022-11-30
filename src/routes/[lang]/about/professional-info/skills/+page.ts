/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call */
import { GET_SKILLS_QUERY } from '$graphql/skills';
import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { client } from '$stores/graphql';
import { setSubNavItem } from '$stores/nav';
import { skills } from '$stores/skills';
import { get } from 'svelte/store';

import type { GetSkillsQuery, GetSkillsQueryVariables } from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let skillsFetch;

	try {
		const { data } = await get(client)
			.query<GetSkillsQuery, GetSkillsQueryVariables>(GET_SKILLS_QUERY, {
				locale: lang
			})
			.toPromise();

		skillsFetch = data;
	} catch (error) {
		console.error(error);
	}

	skills.set(skillsFetch);
	setSubNavItem(ProfessionalInfoNavItemEnum.Skills);

	return { skills: skillsFetch };
};
