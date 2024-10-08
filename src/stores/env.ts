import {
	PUBLIC_GRAPHQL_URI,
	PUBLIC_MAIL_ACCESS_TOKEN,
	PUBLIC_MAIL_URI,
	PUBLIC_PLATFORM,
	PUBLIC_RE_CAPTCHA_KEY,
	PUBLIC_STRAPI_URI
} from '$env/static/public';
import { derived, writable } from 'svelte/store';

export const env = writable<Record<string, string>>({
	graphqlUri: PUBLIC_GRAPHQL_URI,
	platform: PUBLIC_PLATFORM,
	strapiUri: PUBLIC_STRAPI_URI,
	mailUri: PUBLIC_MAIL_URI,
	mailAccessToken: PUBLIC_MAIL_ACCESS_TOKEN,
	reCaptchaKey: PUBLIC_RE_CAPTCHA_KEY,
	vercelAnalyticsId: import.meta.env.VERCEL_ANALYTICS_ID
});

export const graphqlUri = derived(env, ($env) => $env.graphqlUri);
export const strapiUri = derived(env, ($env) => $env.strapiUri);
export const mailUri = derived(env, ($env) => $env.mailUri);
export const mailAccessToken = derived(env, ($env) => $env.mailAccessToken);
export const reCaptchaKey = derived(env, ($env) => $env.reCaptchaKey);
export const platform = derived(env, ($env) => $env.platform);
export const vercelAnalyticsId = derived(env, ($env) => $env.vercelAnalyticsId);
