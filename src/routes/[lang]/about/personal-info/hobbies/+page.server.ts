import { getHobbies } from '$lib/api/hobbies/webservice';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, parent }) => {
	return { hobbies: await parent().then(({ lang }) => getHobbies(lang, fetch)) };
};
