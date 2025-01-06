import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url: { pathname }, parent }) => {
	return {
		route: await parent().then(({ lang }) => pathname.replace(new RegExp(`^/${lang}`), '')),
		lang: await parent().then(({ lang }) => lang),
		profile: await parent().then(({ profile }) => profile)
	};
};
