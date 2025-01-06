/* eslint-disable @typescript-eslint/no-explicit-any */
import slug from 'slug';
import ContentfulClient from '../contentful-client';

import type { Language } from '$models/language';

export const getLanguages = async (lang: string, fetch: typeof globalThis.fetch) => {
	const response = await ContentfulClient.getClient(fetch).getEntries({
		content_type: 'language',
		locale: lang,
		limit: 100
	});

	return response.items
		.map((item: any) => ({ ...item.fields, slug: slug(item.fields.name) }) as Language)
		.sort((i, j) => j.percentage - i.percentage);
};
