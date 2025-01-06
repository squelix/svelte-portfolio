import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	return {
		profile: await parent().then(({ profile }) => profile)
	};
};
