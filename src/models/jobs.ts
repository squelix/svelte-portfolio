import type { Job } from './job';

export const getJobsList = (jobs: Job[] | undefined) => {
	const _jobs = jobs ?? [];
	return [..._jobs, _jobs[_jobs.length - 1]].filter((job) => job !== undefined);
};
