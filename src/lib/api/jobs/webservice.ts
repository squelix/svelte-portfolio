/* eslint-disable @typescript-eslint/no-explicit-any */
import slug from 'slug';
import ContentfulClient from '../contentful-client';
import { getPictureUrl } from '../utils';

import type { Job } from '$models/job';

export const getJobs = async (lang: string, fetch: typeof globalThis.fetch) => {
	const response = await ContentfulClient.getClient(fetch).getEntries({
		content_type: 'job',
		locale: lang,
		limit: 100
	});

	return response.items.map(
		(item: any) =>
			({
				...item.fields,
				slug: slug(item.fields.title),
				picture: getPictureUrl((item.fields.picture as any)?.fields.file.url),
				jobMissions: item.fields.jobMissions.map((mission: any) => ({
					...mission.fields,
					slug: slug(mission.fields.title)
				})),
				jobSkills: (item.fields.jobSkills ?? []).map((skill: any) => ({
					...skill.fields,
					slug: slug(skill.fields.name)
				}))
			}) as Job
	);
};
