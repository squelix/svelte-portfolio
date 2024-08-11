/* eslint-disable @typescript-eslint/no-unused-vars */

import type { GetProjectsQuery, Project } from '$models/graphql-generated';
import type { PageNavFilterItemInterface } from '$models/page-nav-filter-item.interface';
import type { Readable } from 'svelte/store';
import { derived, writable } from 'svelte/store';

export const projects = writable<GetProjectsQuery | undefined>();

export const projectsList = derived(projects, ($projects) =>
	($projects?.projects?.data ?? []).map((project) => project.attributes)
);

export const projectsTechnosAll = derived(projectsList, ($projectsList) => [
	...new Map(
		$projectsList
			.flatMap((project) => project?.technos?.data ?? [])
			.map((item) => [item.attributes?.slug, item])
	).values()
]);

export const projectsTechnosListAllFilters: Readable<PageNavFilterItemInterface[]> = derived(
	[projectsTechnosAll],
	([$projectsTechnosAll]) => [
		{
			id: 'projects',
			labelKey: 'projects.title',
			items: ($projectsTechnosAll ?? []).map((techno) => ({
				id: techno.attributes!.slug,
				label: techno.attributes!.name
			}))
		}
	]
);

export const projectsTechnosFilter = writable<string[] | undefined>();

export const projectsListFiltered: Readable<Omit<Project, '__typename'>[]> = derived(
	[projectsList, projectsTechnosFilter],
	([$projectsList, $projectsTechnosFilter]) => {
		if (!$projectsTechnosFilter || $projectsTechnosFilter.length === 0) {
			return ($projectsList as Project[]).map((project) => {
				const { __typename, ...p } = project;
				return p;
			});
		}

		return (
			$projectsList.filter((project) =>
				(project?.technos?.data ?? []).some((techno) =>
					$projectsTechnosFilter.includes(techno.attributes!.slug)
				)
			) as Project[]
		).map((project) => {
			const { __typename, ...p } = project;
			return p;
		});
	}
);
