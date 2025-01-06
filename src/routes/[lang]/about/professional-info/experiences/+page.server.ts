import { getJobs } from '$lib/api/jobs/webservice';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, fetch }) => {
	return { jobs: await parent().then(({ lang }) => getJobs(lang, fetch)) };
};
