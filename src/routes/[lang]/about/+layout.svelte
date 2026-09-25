<script lang="ts">
	import BorderBottom from '$lib/commons/BorderBottom.svelte';
	import PageNav from '$lib/commons/PageNav.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';
	import { nav } from '$stores/nav';
	import { aboutTitleItem } from '$stores/title';
	import { getI18n } from '$translations';

	const i18n = getI18n();
	type Props = {
		children?: import('svelte').Snippet;
	};

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>{i18n.t('about.page.title')}</title>
	<meta name="description" content={i18n.t('about.page.description')} />
	<meta property="og:title" content={i18n.t('about.page.title')} />
	<meta property="og:description" content={i18n.t('about.page.description')} />
	<meta name="twitter:title" content={i18n.t('about.page.title')} />
	<meta name="twitter:description" content={i18n.t('about.page.description')} />
</svelte:head>

{#if $aboutTitleItem?.labelKey && !$aboutTitleItem?.label}
	<PageTitle textDesktop={i18n.t($aboutTitleItem.labelKey)} textMobile={i18n.t('about.title')} />
{/if}
{#if !$aboutTitleItem?.labelKey && $aboutTitleItem?.label}
	<PageTitle textDesktop={$aboutTitleItem.label} textMobile={i18n.t('about.title')} />
{/if}

<BorderBottom />

<PageNav ariaLabel={i18n.t('about.aria.nav')} items={$nav} />

{@render children?.()}
