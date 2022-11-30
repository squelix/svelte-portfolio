/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions */
import { GET_SCHOOLS_PROJECTS_QUERY } from '$graphql/schools-projects';
import { client } from '$stores/graphql';
import { schoolsProjects } from '$stores/schools';
import { get } from 'svelte/store';

import type {
	GetSchoolsProjectsQuery,
	GetSchoolsProjectsQueryVariables
} from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let schoolsProjectsFetch;

	try {
		const { data } = await get(client)
			.query<GetSchoolsProjectsQuery, GetSchoolsProjectsQueryVariables>(
				GET_SCHOOLS_PROJECTS_QUERY,
				{
					locale: lang
				}
			)
			.toPromise();

		schoolsProjectsFetch = data;
	} catch (error) {
		console.error(error);
	}

	schoolsProjects.set(schoolsProjectsFetch);
	return { schoolsProjects: schoolsProjectsFetch };
};
