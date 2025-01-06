<script lang="ts">
	import { page } from '$app/state';
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
	<title>{$t('hobbies.page.title')}</title>
	<meta name="description" content={$t('hobbies.page.description')} />
	<meta property="og:title" content={$t('hobbies.page.title')} />
	<meta property="og:description" content={$t('hobbies.page.description')} />
	<meta name="twitter:title" content={$t('hobbies.page.title')} />
	<meta name="twitter:description" content={$t('hobbies.page.description')} />
	<link
		rel="canonical"
		href="{page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoHobbies)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoHobbies)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutPersonalInfoHobbies)}"
	/>
</svelte:head>

<PageTextContent lines={data.hobbies} mustSplit={false} mobileDisplayText="per-line" />
