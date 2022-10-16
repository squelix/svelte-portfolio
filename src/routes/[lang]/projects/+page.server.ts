/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { GET_PROJECTS_QUERY } from '$graphql/projects';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type { GetProjectsQuery, GetProjectsQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { pathname, searchParams } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let projectsTechnosFilter: string[] | undefined = undefined;

	if (searchParams.has('techno')) {
		projectsTechnosFilter = searchParams.getAll('techno').flatMap((techno) => techno.split(','));
	}

	let projects;

	try {
		const { data } = await get(client)
			.query<GetProjectsQuery, GetProjectsQueryVariables>(GET_PROJECTS_QUERY, {
				locale: lang
			})
			.toPromise();

		projects = data;
	} catch (error) {
		console.error(error);
	}

	return { projects, projectsTechnosFilter };
};
