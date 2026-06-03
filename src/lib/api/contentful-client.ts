import { env } from '$env/dynamic/private';
import { createClient, type ContentfulClientApi } from 'contentful';
import { getFetchAdapter } from './axios-fetch-adapter';

class ContentfulClient {
	readonly client: ContentfulClientApi<undefined>;

	constructor(fetch: typeof globalThis.fetch) {
		if (!env.CONTENTFUL_SPACE_ID || !env.CONTENTFUL_ACCESS_TOKEN) {
			throw new Error('Missing Contentful credentials');
		}
		this.client = createClient({
			// This is the space ID. A space is like a project folder in Contentful terms
			space: env.CONTENTFUL_SPACE_ID,
			// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
			accessToken: env.CONTENTFUL_ACCESS_TOKEN,
			adapter: (config) => getFetchAdapter(config, fetch)
		});
	}

	static getClient = (fetch: typeof globalThis.fetch) => new ContentfulClient(fetch).client;
}

export default ContentfulClient;
