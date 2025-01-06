import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { schools } }) => {
	return {
		schoolsList: schools ?? []
	};
};
