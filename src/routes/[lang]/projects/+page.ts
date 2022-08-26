import { setNavItem } from '$stores/nav';
import { projects } from '$stores/projects';
import { technos, technosFilter } from '$stores/technos';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	projects.set(data.projects);
	technos.set(data.technos);
	technosFilter.set(data.technosFilter);
	setNavItem('projects');
	return data;
};
