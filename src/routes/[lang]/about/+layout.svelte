<script lang="ts">
	import { page } from '$app/stores';
	import BorderBottom from '$lib/commons/BorderBottom.svelte';
	import PageNav from '$lib/commons/PageNav.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { nav } from '$stores/nav';
	import { aboutTitleItem } from '$stores/title';
	import { t } from '$translations';
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

{#if $aboutTitleItem?.labelKey && !$aboutTitleItem?.label}
	<PageTitle textDesktop={$t($aboutTitleItem.labelKey)} textMobile={$t('about.title')} />
{/if}
{#if !$aboutTitleItem?.labelKey && $aboutTitleItem?.label}
	<PageTitle textDesktop={$aboutTitleItem.label} textMobile={$t('about.title')} />
{/if}

<BorderBottom />

<PageNav ariaLabel={$t('about.aria.nav')} items={$nav} />

<slot />
