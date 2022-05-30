<script context="module" lang="ts">
	import { t, locale, loadTranslations } from '$translations';

	export const load: Load = async ({ stuff }) => {
		await loadTranslations((stuff as any).lang, 'error');
		return {};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import * as Sentry from '@sentry/browser';

	import type { Load } from '@sveltejs/kit';

	export let status = $page.status;
	export let error = $page.error;

	Sentry.captureException(error, (scope) => {
		scope.setExtra('error', error);
		scope.setTag('error_type', 'error_page');
		return scope;
	});
</script>

<main>
	<h1>{$t('error.shit.happens')} ({status})</h1>
	<p>{$t(`error.${status}`, { default: $t('error.default') })}</p>
	<p>{error}</p>
	<br />
	<br />

	{$locale} – {$t(`lang.${$locale}`)}
</main>
