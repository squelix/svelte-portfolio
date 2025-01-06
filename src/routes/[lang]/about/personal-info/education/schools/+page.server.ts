import { getSchools } from '$lib/api/schools/webservice';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, fetch }) => {
	return { schools: await parent().then(({ lang }) => getSchools(lang, fetch)) };
};
