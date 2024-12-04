import { derived, writable } from 'svelte/store';

export const env = writable<Record<string, string>>({
	vercelAnalyticsId: import.meta.env.VERCEL_ANALYTICS_ID
});

export const vercelAnalyticsId = derived(env, ($env) => $env.vercelAnalyticsId);
