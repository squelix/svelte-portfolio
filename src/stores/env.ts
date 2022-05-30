import { writable } from 'svelte/store';

export const env = writable<Record<string, string>>({
	graphqlUri: import.meta.env.VITE_GRAPHQL_URI
});
