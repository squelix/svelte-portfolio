import { getSchoolProjects } from '$lib/api/school-projects/webservice';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, fetch }) => {
	return { schoolsProjects: await parent().then(({ lang }) => getSchoolProjects(lang, fetch)) };
};
