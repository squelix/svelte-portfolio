/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { GET_PROJECTS_QUERY } from '$graphql/projects';
import { GET_TECHNOS_QUERY } from '$graphql/technos';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';

import type {
	GetProjectsQuery,
	GetProjectsQueryVariables,
	GetTechnosQuery,
	GetTechnosQueryVariables
} from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { pathname, searchParams } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let technosFilter: string[] | undefined = undefined;

	if (searchParams.has('techno')) {
		technosFilter = searchParams.getAll('techno').flatMap((techno) => techno.split(','));
	}

	let projects;

	try {
		const { data } = await get(client).query<GetProjectsQuery, GetProjectsQueryVariables>({
			query: GET_PROJECTS_QUERY,
			variables: {
				locale: lang
			}
		});

		projects = data;
	} catch (error) {
		console.error(error);
	}

	let technos;

	try {
		const { data } = await get(client).query<GetTechnosQuery, GetTechnosQueryVariables>({
			query: GET_TECHNOS_QUERY
		});

		technos = data;
	} catch (error) {
		console.error(error);
	}

	return { projects, technos, technosFilter };
};
