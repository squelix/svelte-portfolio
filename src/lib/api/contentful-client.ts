import { env } from '$env/dynamic/private';
import { createClient, type ContentfulClientApi } from 'contentful';
import { getFetchAdapter } from './axios-fetch-adapter';

class ContentfulClient {
	private static instance?: ContentfulClient;
	readonly client: ContentfulClientApi<undefined>;

	constructor(fetch: typeof globalThis.fetch) {
		this.client = createClient({
			// This is the space ID. A space is like a project folder in Contentful terms
			space: env.CONTENTFUL_SPACE_ID,
			// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
			accessToken: env.CONTENTFUL_ACCESS_TOKEN,
			adapter: (config) => getFetchAdapter(config, fetch)
		});
	}

	private static getInstance = (fetch: typeof globalThis.fetch) => {
		if (!this.instance) {
			this.instance = new ContentfulClient(fetch);
		}
		return this.instance;
	};

	static getClient = (fetch: typeof globalThis.fetch) => this.getInstance(fetch).client;
}

export default ContentfulClient;
