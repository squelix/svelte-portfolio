import slug from 'slug';
import ContentfulClient from '../contentful-client';

import type { Legal } from '$models/legal';

export const getLegalMentions = async (lang: string, fetch: typeof globalThis.fetch) => {
	const response = await ContentfulClient.getClient(fetch).getEntry('cTusE4Az7cPdta4mrXewt', {
		locale: lang
	});

	return {
		...response.fields,
		slug: slug(response.fields.title as string)
	} as Legal;
};
