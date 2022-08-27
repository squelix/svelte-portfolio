/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unused-vars */
import { derived, writable } from 'svelte/store';

import type {
	GetSchoolsProjectsQuery,
	GetSchoolsQuery,
	SchoolProject
} from '$models/graphql-generated';
import type { Readable } from 'svelte/store';

export const schools = writable<GetSchoolsQuery | undefined>();

export const schoolsList = derived(schools, ($schools) =>
	($schools?.schools?.data ?? []).map((school) => school.attributes)
);

export const schoolsProjects = writable<GetSchoolsProjectsQuery | undefined>();

export const schoolsProjectsList: Readable<Omit<SchoolProject, '__typename'>[]> = derived(
	schoolsProjects,
	($schoolsProjects) =>
		(
			($schoolsProjects?.schoolProjects?.data ?? []).map(
				(schoolProject) => schoolProject.attributes
			) as SchoolProject[]
		).map((schoolProject) => {
			const { __typename, ...p } = schoolProject;
			return p;
		})
);
