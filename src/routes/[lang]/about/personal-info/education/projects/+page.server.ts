/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions */
import { GET_SCHOOLS_PROJECTS_QUERY } from '$graphql/schools-projects';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type {
	GetSchoolsProjectsQuery,
	GetSchoolsProjectsQueryVariables
} from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let schoolsProjects;

	try {
		const { data } = await get(client).query<
			GetSchoolsProjectsQuery,
			GetSchoolsProjectsQueryVariables
		>({
			query: GET_SCHOOLS_PROJECTS_QUERY,
			variables: {
				locale: lang
			}
		});

		schoolsProjects = data;
	} catch (error) {
		console.error(error);
	}

	return { schoolsProjects };
};
