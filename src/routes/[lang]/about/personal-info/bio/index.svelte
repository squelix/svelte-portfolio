<script lang="ts">
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import { locale } from '$translations';
</script>

<svelte:head>
	<title>{$t('bio.page.title')}</title>
	<meta name="description" content={$t('bio.page.description')} />
	<meta property="og:title" content={$t('bio.page.title')} />
	<meta property="og:description" content={$t('bio.page.description')} />
	<meta name="twitter:title" content={$t('bio.page.title')} />
	<meta name="twitter:description" content={$t('bio.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoBio)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoBio)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutPersonalInfoBio)}"
	/>
</svelte:head>

<p>BIO</p>

<style lang="scss">
</style>
