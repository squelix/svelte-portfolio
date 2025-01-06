/* eslint-disable @typescript-eslint/no-explicit-any */
import slug from 'slug';
import ContentfulClient from '../contentful-client';

import type { SchoolProject } from '$models/school-project';
import { getPictureUrl, getTechno } from '../utils';

export const getSchoolProjects = async (lang: string, fetch: typeof globalThis.fetch) => {
	const response = await ContentfulClient.getClient(fetch).getEntries({
		content_type: 'schoolProject',
		locale: lang,
		limit: 100
	});

	return response.items.map(
		(item: any) =>
			({
				...item.fields,
				slug: slug(item.fields.title),
				picture: getPictureUrl((item.fields.picture as any)?.fields.file.url),
				mainTechno: getTechno(item.fields.mainTechno.fields),
				technos: item.fields.technos.map((t: any) => getTechno(t.fields))
			}) as SchoolProject
	);
};
