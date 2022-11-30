import { schoolsProjects } from '$stores/schools';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	schoolsProjects.set(data.schoolsProjects);
	return {};
};
