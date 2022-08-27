import { schools } from '$stores/schools';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	schools.set(data.schools);
	return data;
};
