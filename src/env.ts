import { defineEnvVars } from '@sveltejs/kit/env';

// Values are read at runtime and stay `undefined` when unset, like `$env/dynamic/private` did.
const optional = (input: string | undefined) => input;

export const variables = defineEnvVars({
	CONTENTFUL_SPACE_ID: { schema: optional },
	CONTENTFUL_ACCESS_TOKEN: { schema: optional },
	MAIL_ACCESS_TOKEN: { schema: optional },
	MAIL_ENDPOINT: { schema: optional },
	VERCEL_ENV: { schema: optional },
	VITE_VERCEL_ENV: { schema: optional }
});
