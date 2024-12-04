import { GET_PROJECTS_QUERY } from '$graphql/projects';
import { client } from '$stores/graphql';

import type { GetProjectsQuery, GetProjectsQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const { pathname, searchParams } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let projectsTechnosFilter: string[] | undefined = undefined;

	if (searchParams.has('techno')) {
		projectsTechnosFilter = searchParams.getAll('techno').flatMap((techno) => techno.split(','));
	}

	let projects;

	try {
		const { data } = await client
			.query<GetProjectsQuery, GetProjectsQueryVariables>(
				GET_PROJECTS_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		projects = data;
	} catch (error) {
		console.error(error);
	}

	return { projects, projectsTechnosFilter };
};
