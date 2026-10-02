import { getLanguages } from '#lib/api/languages/webservice.js';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, parent }) => {
	return { languages: await parent().then(({ lang }) => getLanguages(lang, fetch)) };
};
