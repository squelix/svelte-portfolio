/* eslint-disable @typescript-eslint/no-explicit-any */
import slug from 'slug';
import ContentfulClient from '../contentful-client';

import type { Hobby } from '$models/hobby';

export const getHobbies = async (lang: string, fetch: typeof globalThis.fetch) => {
	const response = await ContentfulClient.getClient(fetch).getEntries({
		content_type: 'hobby',
		locale: lang,
		limit: 100
	});

	return response.items.map(
		(item: any) => ({ ...item.fields, slug: slug(item.fields.name) }) as Hobby
	);
};
