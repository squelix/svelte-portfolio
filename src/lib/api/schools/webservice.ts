/* eslint-disable @typescript-eslint/no-explicit-any */
import slug from 'slug';
import ContentfulClient from '../contentful-client';
import { getPictureUrl } from '../utils';

import type { School } from '$models/school';

export const getSchools = async (lang: string, fetch: typeof globalThis.fetch) => {
	const response = await ContentfulClient.getClient(fetch).getEntries({
		content_type: 'school',
		locale: lang,
		limit: 100
	});

	return response.items.map(
		(item: any) =>
			({
				...item.fields,
				slug: slug(item.fields.diploma),
				picture: getPictureUrl((item.fields.picture as any)?.fields.file.url)
			}) as School
	);
};
