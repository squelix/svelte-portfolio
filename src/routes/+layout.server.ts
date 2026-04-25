import { getProfile } from '$lib/api/profile/webservice';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url: { pathname }, fetch }) => {
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	return {
		route: pathname.replace(new RegExp(`^/${lang}`), ''),
		lang,
		profile: await getProfile(lang, fetch)
	};
};
