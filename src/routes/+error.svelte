<script lang="ts">
	import { page } from '$app/stores';
	import { t, locale } from '$translations';

	export let status = $page.status;
	export let error = $page.error;
</script>

<main>
	<h1>{$t('error.shit.happens')} ({status})</h1>
	<p>{$t(`error.${status}`, { default: $t('error.default') })}</p>
	<p>{JSON.stringify(error)}</p>
	<br />
	<br />

	{$locale} – {$t(`lang.${$locale}`)}
</main>
