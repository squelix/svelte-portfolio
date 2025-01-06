import { getSkills } from '$lib/api/skills/webservice';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, parent }) => {
	return { skills: await parent().then(({ lang }) => getSkills(lang, fetch)) };
};
