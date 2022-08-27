import { graphqlUri } from '$stores/env';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';
import { get, readable } from 'svelte/store';

export const client = readable(
	new ApolloClient({
		cache: new InMemoryCache(),
		uri: get(graphqlUri)
	})
);
