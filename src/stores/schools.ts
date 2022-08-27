/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call */
import { derived, writable } from 'svelte/store';

import type { GetSchoolsProjectsQuery, GetSchoolsQuery } from '$models/graphql-generated';

export const schools = writable<GetSchoolsQuery | undefined>();

export const schoolsList = derived(schools, ($schools) =>
	($schools?.schools?.data ?? []).map((school) => school.attributes)
);

export const schoolsProjects = writable<GetSchoolsProjectsQuery | undefined>();

export const schoolsProjectsList = derived(schoolsProjects, ($schoolsProjects) =>
	($schoolsProjects?.schoolProjects?.data ?? []).map((schoolProject) => schoolProject.attributes)
);
