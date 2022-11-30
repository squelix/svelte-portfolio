/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { GET_PROJECTS_QUERY } from '$graphql/projects';
import { client } from '$stores/graphql';
import { setNavItem } from '$stores/nav';
import { projects, projectsTechnosFilter } from '$stores/projects';
import { get } from 'svelte/store';

import type { GetProjectsQuery, GetProjectsQueryVariables } from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async ({ url }) => {
	const { pathname, searchParams } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let projectsTechnosFilterParam: string[] | undefined = undefined;

	if (searchParams.has('techno')) {
		projectsTechnosFilterParam = searchParams
			.getAll('techno')
			.flatMap((techno) => techno.split(','));
	}

	let projectsFetch;

	try {
		const { data } = await get(client)
			.query<GetProjectsQuery, GetProjectsQueryVariables>(GET_PROJECTS_QUERY, {
				locale: lang
			})
			.toPromise();

		projectsFetch = data;
	} catch (error) {
		console.error(error);
	}

	projects.set(projectsFetch);
	projectsTechnosFilter.set(projectsTechnosFilterParam);
	setNavItem('projects');

	return { projects: projectsFetch, projectsTechnosFilter: projectsTechnosFilterParam };
};
