<script lang="ts">
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import { locale } from '$translations';
</script>

<svelte:head>
	<title>{$t('schools.page.title')}</title>
	<meta name="description" content={$t('schools.page.description')} />
	<meta property="og:title" content={$t('schools.page.title')} />
	<meta property="og:description" content={$t('schools.page.description')} />
	<meta name="twitter:title" content={$t('schools.page.title')} />
	<meta name="twitter:description" content={$t('schools.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoEducationSchools)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(
			LangEnum.fr_FR,
			RoutesEnum.AboutPersonalInfoEducationSchools
		)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(
			LangEnum.en_GB,
			RoutesEnum.AboutPersonalInfoEducationSchools
		)}"
	/>
</svelte:head>

<p>SCHOOLS</p>

<style lang="scss">
</style>
