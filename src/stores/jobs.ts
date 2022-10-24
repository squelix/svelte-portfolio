/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unused-vars */
import { derived, writable } from 'svelte/store';

import type { GetJobsQuery, Job } from '$models/graphql-generated';
import type { Readable } from 'svelte/store';

export const jobs = writable<GetJobsQuery | undefined>();

export const jobsList: Readable<Omit<Job, '__typename'>[]> = derived(jobs, ($jobs) => {
	const _jobs = ($jobs?.jobs?.data ?? [])
		.map((job) => job.attributes)
		.map((job) => {
			if (job?.__typename) {
				const { __typename, ...j } = job;
				return j;
			}
			return job;
		}) as Omit<Job, '__typename'>[];

	return [..._jobs, _jobs[_jobs.length - 1]];
});
