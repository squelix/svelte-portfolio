import { GET_SKILLS_QUERY } from '$graphql/skills';
import { client } from '$stores/graphql';

import type { GetSkillsQuery, GetSkillsQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let skills;

	try {
		const { data } = await client
			.query<GetSkillsQuery, GetSkillsQueryVariables>(
				GET_SKILLS_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		skills = data;
	} catch (error) {
		console.error(error);
	}

	return { skills };
};
