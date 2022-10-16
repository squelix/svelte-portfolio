<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-call */
	import { page } from '$app/stores';
	import JobTimelineContent from '$lib/commons/JobTimelineContent.svelte';
	import PageTimeline from '$lib/commons/PageTimeline.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { jobsList } from '$stores/jobs';
	import { locale, t } from '$translations';
</script>

<svelte:head>
	<title>{$t('experiences.page.title')}</title>
	<meta name="description" content={$t('experiences.page.description')} />
	<meta property="og:title" content={$t('experiences.page.title')} />
	<meta property="og:description" content={$t('experiences.page.description')} />
	<meta name="twitter:title" content={$t('experiences.page.title')} />
	<meta name="twitter:description" content={$t('experiences.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
</svelte:head>

<PageTimeline list={$jobsList} let:item>
	<JobTimelineContent {item} />
</PageTimeline>
