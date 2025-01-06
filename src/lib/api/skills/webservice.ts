/* eslint-disable @typescript-eslint/no-explicit-any */
import slug from 'slug';
import ContentfulClient from '../contentful-client';

import type { Skill } from '$models/skill';

export const getSkills = async (lang: string, fetch: typeof globalThis.fetch) => {
	const response = await ContentfulClient.getClient(fetch).getEntries({
		content_type: 'skill',
		locale: lang,
		limit: 100
	});

	return response.items
		.map((item: any) => ({ ...item.fields, slug: slug(item.fields.name) }) as Skill)
		.sort((i, j) => j.percentage - i.percentage);
};
