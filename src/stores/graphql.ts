/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call */
import { graphqlUri } from '$stores/env';
import { cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange } from '@urql/svelte';
import { get, readable } from 'svelte/store';

export const client = readable(
	createClient({
		url: get(graphqlUri),
		exchanges: [dedupExchange, cacheExchange({}), fetchExchange]
	})
);
