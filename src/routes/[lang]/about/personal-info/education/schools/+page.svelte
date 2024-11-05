<script lang="ts">
	import { page } from '$app/stores';
	import PageTimeline from '$lib/commons/PageTimeline.svelte';
	import SchoolTimelineContent from '$lib/commons/SchoolTimelineContent.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { schoolsList } from '$stores/schools';
	import { locale, t } from '$translations';
</script>

<svelte:head>
	<title>{$t('schools.page.title')}</title>
	<meta name="description" content={$t('schools.page.description')} />
	<meta property="og:title" content={$t('schools.page.title')} />
	<meta property="og:description" content={$t('schools.page.description')} />
	<meta name="twitter:title" content={$t('schools.page.title')} />
	<meta name="twitter:description" content={$t('schools.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoEducationSchools)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(
			LangEnum.fr_FR,
			RoutesEnum.AboutPersonalInfoEducationSchools
		)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(
			LangEnum.en_GB,
			RoutesEnum.AboutPersonalInfoEducationSchools
		)}"
	/>
</svelte:head>

<PageTimeline list={$schoolsList}>
	{#snippet children({ item })}
		<SchoolTimelineContent {item} />
	{/snippet}
</PageTimeline>
