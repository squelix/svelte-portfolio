import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { schoolsProjects } }) => {
	return { schoolsProjectsList: schoolsProjects };
};
