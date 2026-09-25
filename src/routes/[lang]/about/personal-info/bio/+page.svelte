<script lang="ts">
	import { page } from '$app/state';
	import PageTextContent from '$lib/commons/PageTextContent.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { getI18n } from '$translations';

	import type { PageData } from './$types';

	const i18n = getI18n();

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{i18n.t('bio.page.title')}</title>
	<meta name="description" content={i18n.t('bio.page.description')} />
	<meta property="og:title" content={i18n.t('bio.page.title')} />
	<meta property="og:description" content={i18n.t('bio.page.description')} />
	<meta name="twitter:title" content={i18n.t('bio.page.title')} />
	<meta name="twitter:description" content={i18n.t('bio.page.description')} />
	<link
		rel="canonical"
		href="{page.url.origin}{getRoute(i18n.locale!, RoutesEnum.AboutPersonalInfoBio)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoBio)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutPersonalInfoBio)}"
	/>
	<link
		rel="alternate"
		hreflang="x-default"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoBio)}"
	/>
</svelte:head>

<PageTextContent lines={data.profile.biographyLines} mustSplit={false} />
