<script lang="ts">
	import { page } from '$app/stores';
	import { RoutesEnum, getRoute } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { locale, t } from '$translations';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{$t('legals-mentions.page.title')}</title>
	<meta name="description" content={$t('legals-mentions.page.description')} />
	<meta property="og:title" content={$t('legals-mentions.page.title')} />
	<meta property="og:description" content={$t('legals-mentions.page.description')} />
	<meta name="twitter:title" content={$t('legals-mentions.page.title')} />
	<meta name="twitter:description" content={$t('legals-mentions.page.description')} />
	<link rel="canonical" href="{$page.url.origin}{getRoute($locale, RoutesEnum.LegalsMentions)}" />
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.LegalsMentions)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.LegalsMentions)}"
	/>
</svelte:head>

<div class="legals">
	<h1 class="legals__title">{$t('legals-mentions.title')}</h1>

	{#if data.legalsMentions?.legalMention?.data?.attributes?.text}
		<div class="inner-html">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.legalsMentions.legalMention.data.attributes.text}
		</div>
	{/if}
</div>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

	.legals {
		padding: 1.0625rem;

		&__title {
			font-size: 2.25rem;
			font-weight: bold;
			margin-bottom: 2rem;
		}

		@include br.desktop {
			padding: 2rem 1.6875rem 4rem;
			grid-column: 1 / span 2;
			overflow-y: scroll;
			height: calc(100vh - (var(--desktop-main-padding) * 2) - var(--nav-height));
		}
	}
</style>
