<script lang="ts">
	import { page } from '$app/state';
	import { locale, t } from '$translations';
</script>

<svelte:head>
	<title>{$t('error.page.title', { default: 'Erreur' })} ({page.status})</title>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<main>
	<h1>{$t('error.shit.happens')} ({page.status})</h1>
	<p>{$t(`error.${page.status}`, { default: $t('error.default') })}</p>
	<p>{JSON.stringify(page.error)}</p>
	<br />
	<br />

	{$locale} – {$t(`lang.${$locale}`)}
</main>
