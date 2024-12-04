import { GET_JOBS_QUERY } from '$graphql/jobs';
import { client } from '$stores/graphql';

import type { GetJobsQuery, GetJobsQueryVariables } from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let jobs;

	try {
		const { data } = await client
			.query<GetJobsQuery, GetJobsQueryVariables>(
				GET_JOBS_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		jobs = data;
	} catch (error) {
		console.error(error);
	}

	return { jobs };
};
