<script lang="ts">
	import { page } from '$app/stores';
	import { t, locale } from '$translations';

	let { status = $page.status, error = $page.error } = $props();
</script>

<main>
	<h1>{$t('error.shit.happens')} ({status})</h1>
	<p>{$t(`error.${status}`, { default: $t('error.default') })}</p>
	<p>{JSON.stringify(error)}</p>
	<br />
	<br />

	{$locale} – {$t(`lang.${$locale}`)}
</main>
