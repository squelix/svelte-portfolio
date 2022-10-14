/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call */

import { GET_JOBS_QUERY } from '$graphql/jobs';
import type { GetJobsQuery, GetJobsQueryVariables } from '$models/graphql-generated';
import { client } from '$stores/graphql';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let jobs;

	try {
		const { data } = await get(client)
			.query<GetJobsQuery, GetJobsQueryVariables>(GET_JOBS_QUERY, {
				locale: lang
			})
			.toPromise();

		jobs = data;
	} catch (error) {
		console.error(error);
	}

	return { jobs };
};
