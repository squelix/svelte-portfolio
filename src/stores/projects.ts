/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unused-vars */
import { technosFilter } from '$stores/technos';
import { derived, writable } from 'svelte/store';

import type { GetProjectsQuery, Project } from '$models/graphql-generated';
import type { Readable } from 'svelte/store';

export const projects = writable<GetProjectsQuery | undefined>();

export const projectsList = derived(projects, ($projects) =>
	($projects?.projects?.data ?? []).map((project) => project.attributes)
);

export const projectsListFiltered: Readable<Omit<Project, '__typename'>[]> = derived(
	[projectsList, technosFilter],
	([$projectsList, $technosFilter]) => {
		if (!$technosFilter || $technosFilter.length === 0) {
			return ($projectsList as Project[]).map((project) => {
				const { __typename, ...p } = project;
				return p;
			});
		}

		return (
			$projectsList.filter((project) =>
				(project?.technos?.data ?? []).some((techno) =>
					$technosFilter.includes(techno.attributes!.slug)
				)
			) as Project[]
		).map((project) => {
			const { __typename, ...p } = project;
			return p;
		});
	}
);
