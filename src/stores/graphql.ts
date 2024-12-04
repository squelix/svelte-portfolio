/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';
import { PUBLIC_GRAPHQL_URI, PUBLIC_PLATFORM } from '$env/static/public';
import { cacheExchange, createClient, fetchExchange, ssrExchange } from '@urql/core';

export const ssr = ssrExchange({
	isClient: browser,
	initialState: browser ? (window as any).__URQL_DATA__ : undefined
});

export const client = createClient({
	url: PUBLIC_GRAPHQL_URI,
	...(PUBLIC_PLATFORM === 'dev'
		? { requestPolicy: 'network-only' }
		: { requestPolicy: 'cache-and-network' }),
	exchanges: [cacheExchange, ssr, fetchExchange]
});
