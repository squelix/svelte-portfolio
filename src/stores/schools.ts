/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unused-vars */
import { derived, writable } from 'svelte/store';

import type {
	GetSchoolsProjectsQuery,
	GetSchoolsQuery,
	School,
	SchoolProject
} from '$models/graphql-generated';
import type { Readable } from 'svelte/store';

export const schools = writable<GetSchoolsQuery | undefined>();

export const schoolsList: Readable<Omit<School, '__typename'>[]> = derived(
	schools,
	($schools) =>
		($schools?.schools?.data ?? [])
			.map((school) => school.attributes)
			.map((school) => {
				if (school?.__typename) {
					const { __typename, ...j } = school;
					return j;
				}
				return school;
			}) as Omit<School, '__typename'>[]
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
