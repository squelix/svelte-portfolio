import { getProjects } from '$lib/api/projects/webservice';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url: { searchParams }, fetch, parent }) => {
	let projectsTechnosFilter: string[] | undefined = undefined;

	if (searchParams.has('techno')) {
		projectsTechnosFilter = searchParams.getAll('techno').flatMap((techno) => techno.split(','));
	}

	return {
		projects: await parent().then(({ lang }) => getProjects(lang, fetch)),
		projectsTechnosFilter
	};
};
