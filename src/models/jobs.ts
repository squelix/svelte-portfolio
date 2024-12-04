import type { GetJobsQuery, Job } from '$models/graphql-generated';

export const getJobsList = (jobs: GetJobsQuery | undefined) => {
	const _jobs = (jobs?.jobs?.data ?? [])
		.map((job) => job.attributes)
		.map((job) => {
			if (job?.__typename) {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const { __typename, ...j } = job;
				return j;
			}
			return job;
		}) as Omit<Job, '__typename'>[];

	return [..._jobs, _jobs[_jobs.length - 1]].filter((job) => job !== undefined);
};
