<script lang="ts" context="module">
	import { setItem } from '$stores/page-nav';

	setItem('personal-info');
</script>

<script lang="ts">
	import { aboutTitleItem } from '$stores/title';
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import PageNav from '$lib/commons/PageNav.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';
	import { aboutPageNavItems } from '$lib/menu/nav';
	import BorderBottom from '$lib/commons/BorderBottom.svelte';

	const item = aboutTitleItem(aboutPageNavItems);
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

<PageTitle textDesktop={$t($item?.labelKey)} textMobile={$t('about.title')} />

<BorderBottom />

<PageNav ariaLabel={$t('about.aria.nav')} items={aboutPageNavItems} />

<slot />

<style lang="scss"></style>
