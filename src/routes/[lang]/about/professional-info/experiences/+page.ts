/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call */
import { GET_JOBS_QUERY } from '$graphql/jobs';
import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { client } from '$stores/graphql';
import { jobs } from '$stores/jobs';
import { setSubNavItem } from '$stores/nav';
import { get } from 'svelte/store';

import type { GetJobsQuery, GetJobsQueryVariables } from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	let jobsFetch;

	try {
		const { data } = await get(client)
			.query<GetJobsQuery, GetJobsQueryVariables>(GET_JOBS_QUERY, {
				locale: lang
			})
			.toPromise();

		jobsFetch = data;
	} catch (error) {
		console.error(error);
	}

	jobs.set(jobsFetch);
	setSubNavItem(ProfessionalInfoNavItemEnum.Experiences);
	return { jobs: jobsFetch };
};
