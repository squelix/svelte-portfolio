<script lang="ts">
	import { page } from '$app/state';
	import LayoutPage from '$lib/commons/LayoutPage.svelte';
	import ProjectsList from '$lib/commons/ProjectsList.svelte';
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
	<title>{$t('education-projects.page.title')}</title>
	<meta name="description" content={$t('education-projects.page.description')} />
	<meta property="og:title" content={$t('education-projects.page.title')} />
	<meta property="og:description" content={$t('education-projects.page.description')} />
	<meta name="twitter:title" content={$t('education-projects.page.title')} />
	<meta name="twitter:description" content={$t('education-projects.page.description')} />
	<link
		rel="canonical"
		href="{page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoEducationProjects)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{page.url.origin}{getRoute(
			LangEnum.fr_FR,
			RoutesEnum.AboutPersonalInfoEducationProjects
		)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{page.url.origin}{getRoute(
			LangEnum.en_GB,
			RoutesEnum.AboutPersonalInfoEducationProjects
		)}"
	/>
</svelte:head>

<LayoutPage>
	<ProjectsList projects={data.schoolsProjectsList} baseTrad="education-projects" />
</LayoutPage>
