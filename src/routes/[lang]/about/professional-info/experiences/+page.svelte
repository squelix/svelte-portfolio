<script lang="ts">
	import { page } from '$app/state';
	import JobTimelineContent from '$lib/commons/JobTimelineContent.svelte';
	import PageTimeline from '$lib/commons/PageTimeline.svelte';
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
	<title>{i18n.t('experiences.page.title')}</title>
	<meta name="description" content={i18n.t('experiences.page.description')} />
	<meta property="og:title" content={i18n.t('experiences.page.title')} />
	<meta property="og:description" content={i18n.t('experiences.page.description')} />
	<meta name="twitter:title" content={i18n.t('experiences.page.title')} />
	<meta name="twitter:description" content={i18n.t('experiences.page.description')} />
	<link
		rel="canonical"
		href="{page.url.origin}{getRoute(i18n.locale!, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
	<link
		rel="alternate"
		hreflang="x-default"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
</svelte:head>

<PageTimeline
	list={data.jobs}
	shouldDisplayLastConnector={data.jobs.findIndex((job) => !job.endDate) === -1}
>
	{#snippet children({ item, last })}
		<JobTimelineContent {item} {last} />
	{/snippet}
</PageTimeline>
