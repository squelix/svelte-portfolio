import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '$app/env/private';
import { createClient, type ContentfulClientApi } from 'contentful';
import { getFetchAdapter } from './axios-fetch-adapter';

class ContentfulClient {
	readonly client: ContentfulClientApi<undefined>;

	constructor(fetch: typeof globalThis.fetch) {
		if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
			throw new Error('Missing Contentful credentials');
		}
		this.client = createClient({
			// This is the space ID. A space is like a project folder in Contentful terms
			space: CONTENTFUL_SPACE_ID,
			// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
			accessToken: CONTENTFUL_ACCESS_TOKEN,
			adapter: (config) => getFetchAdapter(config, fetch)
		});
	}

	static getClient = (fetch: typeof globalThis.fetch) => new ContentfulClient(fetch).client;
}

export default ContentfulClient;
