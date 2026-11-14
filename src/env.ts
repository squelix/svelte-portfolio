import { defineEnvVars } from '@sveltejs/kit/env';

// Values are read at runtime and stay `undefined` when unset, like `$env/dynamic/private` did.
const optional = (input: string | undefined) => input;

export const variables = defineEnvVars({
	CONTENTFUL_SPACE_ID: { schema: optional },
	CONTENTFUL_ACCESS_TOKEN: { schema: optional },
	MAIL_ACCESS_TOKEN: { schema: optional },
	MAIL_ENDPOINT: { schema: optional },
	VERCEL_ENV: { schema: optional },
	VITE_VERCEL_ENV: { schema: optional },
	// ISR bypass/revalidation token. Only the build-time value reaches the ISR config, so it is static:
	// rotating it requires a redeploy.
	BYPASS_TOKEN: {
		static: true,
		schema: (input: string | undefined) => {
			if (!input) return undefined;
			if (input.length < 32) throw new Error('BYPASS_TOKEN must be at least 32 characters long');
			return input;
		}
	}
});
