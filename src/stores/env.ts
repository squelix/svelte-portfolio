/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	PUBLIC_GRAPHQL_URI,
	PUBLIC_MAIL_ACCESS_TOKEN,
	PUBLIC_MAIL_URI,
	PUBLIC_RE_CAPTCHA_KEY,
	PUBLIC_STRAPI_URI
} from '$env/static/public';
import { derived, writable } from 'svelte/store';

export const env = writable<Record<string, string>>({
	graphqlUri: PUBLIC_GRAPHQL_URI,
	strapiUri: PUBLIC_STRAPI_URI,
	mailUri: PUBLIC_MAIL_URI,
	mailAccessToken: PUBLIC_MAIL_ACCESS_TOKEN,
	reCaptchaKey: PUBLIC_RE_CAPTCHA_KEY
});

export const graphqlUri = derived(env, ($env) => $env.graphqlUri);
export const strapiUri = derived(env, ($env) => $env.strapiUri);
export const mailUri = derived(env, ($env) => $env.mailUri);
export const mailAccessToken = derived(env, ($env) => $env.mailAccessToken);
export const reCaptchaKey = derived(env, ($env) => $env.reCaptchaKey);
