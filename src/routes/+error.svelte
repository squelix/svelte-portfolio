<script lang="ts">
	import { page } from '$app/state';
	import { getI18n } from '$translations';

	const i18n = getI18n();

	// Missing keys resolve to the key itself (`fallbackValue` default).
	const tOr = (key: string, fallback: string) => {
		const value = i18n.t(key);
		return value === key ? fallback : value;
	};
</script>

<svelte:head>
	<title>{tOr('error.page.title', 'Erreur')} ({page.status})</title>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<main>
	<h1>{i18n.t('error.shit.happens')} ({page.status})</h1>
	<p>{tOr(`error.${page.status}`, i18n.t('error.default'))}</p>
	<p>{JSON.stringify(page.error)}</p>
	<br />
	<br />

	{i18n.locale} – {i18n.t(`lang.${i18n.locale}`)}
</main>
