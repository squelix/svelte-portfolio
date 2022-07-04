import { derived, writable } from 'svelte/store';

export const env = writable<Record<string, string>>({
	graphqlUri: import.meta.env.VITE_GRAPHQL_URI,
	strapiUri: import.meta.env.VITE_STRAPI_URI
});

export const graphqlUri = derived(env, ($env) => $env.graphqlUri);
export const strapiUri = derived(env, ($env) => $env.strapiUri);
