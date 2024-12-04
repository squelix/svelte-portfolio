<script lang="ts">
	import { page } from '$app/stores';
	import PageTextContent from '$lib/commons/PageTextContent.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { locale, t } from '$translations';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{$t('skills.page.title')}</title>
	<meta name="description" content={$t('skills.page.description')} />
	<meta property="og:title" content={$t('skills.page.title')} />
	<meta property="og:description" content={$t('skills.page.description')} />
	<meta name="twitter:title" content={$t('skills.page.title')} />
	<meta name="twitter:description" content={$t('skills.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutProfessionalInfoSkills)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutProfessionalInfoSkills)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutProfessionalInfoSkills)}"
	/>
</svelte:head>

<PageTextContent lines={data.skills} mobileDisplayText="per-line" />
