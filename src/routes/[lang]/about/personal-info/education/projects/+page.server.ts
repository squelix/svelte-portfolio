import { GET_SCHOOLS_PROJECTS_QUERY } from '$graphql/schools-projects';
import { client } from '$stores/graphql';

import type {
	GetSchoolsProjectsQuery,
	GetSchoolsProjectsQueryVariables
} from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let schoolsProjects;

	try {
		const { data } = await client
			.query<GetSchoolsProjectsQuery, GetSchoolsProjectsQueryVariables>(
				GET_SCHOOLS_PROJECTS_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		schoolsProjects = data;
	} catch (error) {
		console.error(error);
	}

	return { schoolsProjects };
};
