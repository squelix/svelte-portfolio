<script lang="ts">
	import { page } from '$app/stores';
	import PageTextContent from '$lib/commons/PageTextContent.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { languagesListBars } from '$stores/languages';
	import { locale, t } from '$translations';
</script>

<svelte:head>
	<title>{$t('languages.page.title')}</title>
	<meta name="description" content={$t('languages.page.description')} />
	<meta property="og:title" content={$t('languages.page.title')} />
	<meta property="og:description" content={$t('languages.page.description')} />
	<meta name="twitter:title" content={$t('languages.page.title')} />
	<meta name="twitter:description" content={$t('languages.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutProfessionalInfoLanguages)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutProfessionalInfoLanguages)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutProfessionalInfoLanguages)}"
	/>
</svelte:head>

<PageTextContent lines={$languagesListBars} mobileDisplayText="per-line" />
