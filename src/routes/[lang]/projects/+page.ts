import { setNavItem } from '$stores/nav';

import type { Project } from '$models/project';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { projects, projectsTechnosFilter } }) => {
	setNavItem('projects');

	const projectsTechnosAll = [
		...new Map(
			projects.flatMap((project) => project?.technos ?? []).map((item) => [item.slug, item])
		).values()
	];

	const projectsTechnosListAllFilters = [
		{
			id: 'projects',
			labelKey: 'projects.title',
			items: (projectsTechnosAll ?? []).map((techno) => ({
				id: techno.slug,
				label: techno.name
			}))
		}
	];

	let projectsListFiltered: Project[];

	if (!projectsTechnosFilter || projectsTechnosFilter.length === 0) {
		projectsListFiltered = projects;
	} else {
		projectsListFiltered = projects.filter((project) =>
			(project?.technos ?? []).some((techno) => (projectsTechnosFilter ?? []).includes(techno.slug))
		);
	}

	return {
		projectsTechnosFilter,
		projectsTechnosListAllFilters,
		projectsListFiltered: projectsListFiltered.sort((a, b) => {
			if (a.slug < b.slug) return -1;
			if (a.slug > b.slug) return 1;
			return 0;
		})
	};
};
