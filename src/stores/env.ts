import { derived, writable } from 'svelte/store';

export const env = writable<Record<string, string>>({
	graphqlUri: import.meta.env.VITE_GRAPHQL_URI,
	strapiUri: import.meta.env.VITE_STRAPI_URI,
	mailUri: import.meta.env.VITE_MAIL_URI,
	mailAccessToken: import.meta.env.VITE_MAIL_ACCESS_TOKEN,
	reCaptchaKey: import.meta.env.VITE_RE_CAPTCHA_KEY
});

export const graphqlUri = derived(env, ($env) => $env.graphqlUri);
export const strapiUri = derived(env, ($env) => $env.strapiUri);
export const mailUri = derived(env, ($env) => $env.mailUri);
export const mailAccessToken = derived(env, ($env) => $env.mailAccessToken);
export const reCaptchaKey = derived(env, ($env) => $env.reCaptchaKey);
