import { getLegalMentions } from '$lib/api/legals/webservice';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url: { pathname }, fetch, parent }) => {
	return {
		route: await parent().then(({ lang }) => pathname.replace(new RegExp(`^/${lang}`), '')),
		lang: await parent().then(({ lang }) => lang),
		legalsMentions: await parent().then(({ lang }) => getLegalMentions(lang, fetch))
	};
};
