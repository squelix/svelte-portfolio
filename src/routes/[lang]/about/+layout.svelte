<script lang="ts">
	import { aboutTitleItem } from '$stores/title';
	import { nav } from '$stores/nav';
	import { t } from '$translations';
	import { RoutesEnum, getRoute } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import PageNav from '$lib/commons/PageNav.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';
	import BorderBottom from '$lib/commons/BorderBottom.svelte';
</script>

<svelte:head>
	<title>{$t('about.page.title')}</title>
	<meta name="description" content={$t('about.page.description')} />
	<meta property="og:title" content={$t('about.page.title')} />
	<meta property="og:description" content={$t('about.page.description')} />
	<meta name="twitter:title" content={$t('about.page.title')} />
	<meta name="twitter:description" content={$t('about.page.description')} />
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.About)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.About)}"
	/>
</svelte:head>

<PageTitle textDesktop={$t($aboutTitleItem?.labelKey)} textMobile={$t('about.title')} />

<BorderBottom />

<PageNav ariaLabel={$t('about.aria.nav')} items={$nav} />

<slot />

<style lang="scss"></style>
