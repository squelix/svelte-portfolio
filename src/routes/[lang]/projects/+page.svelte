<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import BorderBottom from '$lib/commons/BorderBottom.svelte';
	import LayoutPage from '$lib/commons/LayoutPage.svelte';
	import PageNavFilter from '$lib/commons/PageNavFilter.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';
	import ProjectsList from '$lib/commons/ProjectsList.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { locale, t } from '$translations';

	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();

	const textMobile = `_${$t('projects.title') as string}`;

	const updateSelectedFilter = async (filterId: string) => {
		const url = new URL(page.url);
		const actualTechnos = data.projectsTechnosFilter ?? [];

		let newTechnos: string[];

		if (actualTechnos.includes(filterId)) {
			newTechnos = [...new Set(actualTechnos.filter((techno) => techno !== filterId))];
		} else {
			newTechnos = [...new Set([...actualTechnos, filterId])];
		}

		if (newTechnos.length > 0) {
			url.searchParams.set('techno', newTechnos.join(','));
		} else {
			url.searchParams.delete('techno');
		}

		await goto(url);
	};
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<svelte:head>
	<title>{$t('projects.page.title')}</title>
	<meta name="description" content={$t('projects.page.description')} />
	<meta property="og:title" content={$t('projects.page.title')} />
	<meta property="og:description" content={$t('projects.page.description')} />
	<meta name="twitter:title" content={$t('projects.page.title')} />
	<meta name="twitter:description" content={$t('projects.page.description')} />
	<link rel="canonical" href="{page.url.origin}{getRoute($locale, RoutesEnum.Projects)}" />
	<link
		rel="alternate"
		hreflang="fr"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.Projects)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.Projects)}"
	/>
</svelte:head>

{#if data.projectsTechnosFilter && (data.projectsTechnosFilter ?? []).length > 0}
	<PageTitle textDesktop={data.projectsTechnosFilter.join('; ')} {textMobile} />
{:else}
	<PageTitle textDesktop={$t('projects.title')} {textMobile} />
{/if}

<PageNavFilter
	items={data.projectsTechnosListAllFilters}
	selectedItems={data.projectsTechnosFilter ?? []}
	ariaLabel={$t('projects.aria.nav')}
	{updateSelectedFilter}
/>

<BorderBottom />

<h2>
	//&nbsp;{$t('projects.title')}
	{#if data.projectsTechnosFilter && (data.projectsTechnosFilter ?? []).length > 0}
		<span>/&nbsp;{data.projectsTechnosFilter.join('; ')}</span>
	{/if}
</h2>

<LayoutPage>
	<ProjectsList projects={data.projectsListFiltered} baseTrad="projects" />
</LayoutPage>

<style lang="scss">
	@use '$styles/lib/mixins/breakpoints' as br;

	h2 {
		margin: 2.375rem 0 0;
		padding: 0 1.6875rem;

		span {
			color: var(--secondary-1);
		}

		@include br.desktop {
			display: none;
		}
	}
</style>
