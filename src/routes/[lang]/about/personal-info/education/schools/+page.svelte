<script lang="ts">
	import { page } from '$app/state';
	import PageTimeline from '$lib/commons/PageTimeline.svelte';
	import SchoolTimelineContent from '$lib/commons/SchoolTimelineContent.svelte';
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
	<title>{i18n.t('schools.page.title')}</title>
	<meta name="description" content={i18n.t('schools.page.description')} />
	<meta property="og:title" content={i18n.t('schools.page.title')} />
	<meta property="og:description" content={i18n.t('schools.page.description')} />
	<meta name="twitter:title" content={i18n.t('schools.page.title')} />
	<meta name="twitter:description" content={i18n.t('schools.page.description')} />
	<link
		rel="canonical"
		href="{page.url.origin}{getRoute(i18n.locale!, RoutesEnum.AboutPersonalInfoEducationSchools)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoEducationSchools)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutPersonalInfoEducationSchools)}"
	/>
	<link
		rel="alternate"
		hreflang="x-default"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoEducationSchools)}"
	/>
</svelte:head>

<PageTimeline list={data.schoolsList}>
	{#snippet children({ item })}
		<SchoolTimelineContent {item} />
	{/snippet}
</PageTimeline>
