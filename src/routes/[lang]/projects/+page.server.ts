import { getProjects } from '#lib/api/projects/webservice.js';
import { isrConfig } from '#lib/server/isr.js';

import type { Config } from '@sveltejs/adapter-vercel';
import type { PageServerLoad } from './$types';

// ISR drops query params by default; keep `techno` in the cache key so filtering still works.
export const config: Config = { isr: { ...isrConfig, allowQuery: ['techno'] } };

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
