import { env } from '$stores/env';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { get, readable } from 'svelte/store';

export const client = readable(
	new ApolloClient({
		cache: new InMemoryCache(),
		uri: get(env).graphqlUri
	})
);
