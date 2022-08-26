/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { technosFilter } from '$stores/technos';
import { derived, writable } from 'svelte/store';

import type { GetProjectsQuery, Project } from '$models/graphql-generated';
import type { Readable } from 'svelte/store';

export const projects = writable<GetProjectsQuery | undefined>();

export const projectsList = derived(projects, ($projects) =>
	($projects?.projects?.data ?? []).map((project) => project.attributes)
);

export const projectsListFiltered: Readable<Project[]> = derived(
	[projectsList, technosFilter],
	([$projectsList, $technosFilter]) => {
		if (!$technosFilter || $technosFilter.length === 0) {
			return $projectsList as Project[];
		}

		return $projectsList.filter((project) =>
			(project?.technos?.data ?? []).some((techno) =>
				$technosFilter.includes(techno.attributes!.slug)
			)
		) as Project[];
	}
);
