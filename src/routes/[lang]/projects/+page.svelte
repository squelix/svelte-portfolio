<script lang="ts">
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import { locale } from '$translations';
</script>

<svelte:head>
	<title>{$t('projects.page.title')}</title>
	<meta name="description" content={$t('projects.page.description')} />
	<meta property="og:title" content={$t('projects.page.title')} />
	<meta property="og:description" content={$t('projects.page.description')} />
	<meta name="twitter:title" content={$t('projects.page.title')} />
	<meta name="twitter:description" content={$t('projects.page.description')} />
	<link rel="canonical" href="{$page.url.origin}{getRoute($locale, RoutesEnum.Projects)}" />
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.Projects)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.Projects)}"
	/>
</svelte:head>

<div>PROJECTS</div>

<style lang="scss">
</style>
