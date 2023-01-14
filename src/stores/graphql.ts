/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import { browser } from '$app/environment';
import { graphqlUri, platform } from '$stores/env';
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from '@urql/core';
import { derived, get } from 'svelte/store';

export const ssr = ssrExchange({
	isClient: browser,
	initialState: browser ? (window as any).__URQL_DATA__ : undefined
});

export const client = derived(platform, ($platform) =>
	createClient({
		url: get(graphqlUri),
		...($platform === 'dev'
			? { requestPolicy: 'network-only' }
			: { requestPolicy: 'cache-and-network' }),
		exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange]
	})
);
