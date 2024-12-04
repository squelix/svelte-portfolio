import type { Project } from '$models/graphql-generated';
import { setNavItem } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	// projects.set(data.projects);
	// projectsTechnosFilter.set(data.projectsTechnosFilter);
	setNavItem('projects');

	const projectsTechnosFilter = data.projectsTechnosFilter;
	const projectsList = (data.projects?.projects?.data ?? []).map((project) => project.attributes);
	const projectsTechnosAll = [
		...new Map(
			projectsList
				.flatMap((project) => project?.technos?.data ?? [])
				.map((item) => [item.attributes?.slug, item])
		).values()
	];
	const projectsTechnosListAllFilters = [
		{
			id: 'projects',
			labelKey: 'projects.title',
			items: (projectsTechnosAll ?? []).map((techno) => ({
				id: techno.attributes!.slug,
				label: techno.attributes!.name
			}))
		}
	];

	let projectsListFiltered;

	if (!projectsTechnosFilter || projectsTechnosFilter.length === 0) {
		projectsListFiltered = (projectsList as Project[]).map((project) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { __typename, ...p } = project;
			return p;
		});
	} else {
		projectsListFiltered = (
			projectsList.filter((project) =>
				(project?.technos?.data ?? []).some((techno) =>
					(projectsTechnosFilter ?? []).includes(techno.attributes!.slug)
				)
			) as Project[]
		).map((project) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { __typename, ...p } = project;
			return p;
		});
	}

	return { projectsTechnosFilter, projectsTechnosListAllFilters, projectsListFiltered };
};
