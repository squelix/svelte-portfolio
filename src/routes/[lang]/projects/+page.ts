import { setNavItem } from '$stores/nav';
import { projects, projectsTechnosFilter } from '$stores/projects';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	projects.set(data.projects);
	projectsTechnosFilter.set(data.projectsTechnosFilter);
	setNavItem('projects');
	return data;
};
