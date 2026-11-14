import { getLegalMentions } from '#lib/api/legals/webservice.js';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, parent }) => {
	const { lang } = await parent();
	return { legalsMentions: await getLegalMentions(lang, fetch) };
};
