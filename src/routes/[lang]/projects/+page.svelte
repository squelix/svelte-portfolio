<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import BorderBottom from '$lib/commons/BorderBottom.svelte';
	import LayoutPage from '$lib/commons/LayoutPage.svelte';
	import PageNavFilter from '$lib/commons/PageNavFilter.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';
	import ProjectsList from '$lib/commons/ProjectsList.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import {
		projectsListFiltered,
		projectsTechnosFilter,
		projectsTechnosListAllFilters
	} from '$stores/projects';
	import { locale, t } from '$translations';

	const textMobile = `_${$t('projects.title') as string}`;

	const updateSelectedFilters = async ({
		detail: { filterId }
	}: CustomEvent<{ filterId: string }>) => {
		const url = new URL($page.url);
		const actualTechnos = $projectsTechnosFilter ?? [];

		let newTechnos: string[];

		if (actualTechnos.includes(filterId)) {
			newTechnos = [...new Set(actualTechnos.filter((techno) => techno !== filterId))];
		} else {
			newTechnos = [...new Set([...actualTechnos, filterId])];
		}

		const queryParams = newTechnos.length > 0 ? `?techno=${newTechnos.join(',')}` : '';
		const redirect = `${url.pathname}${queryParams}`;

		await goto(redirect);
	};
</script>

<svelte:head>
	<title>{$t('projects.page.title')}</title>
	<meta name="description" content={$t('projects.page.description')} />
	<meta property="og:title" content={$t('projects.page.title')} />
	<meta property="og:description" content={$t('projects.page.description')} />
	<meta name="twitter:title" content={$t('projects.page.title')} />
	<meta name="twitter:description" content={$t('projects.page.description')} />
	<link rel="canonical" href="{$page.url.origin}{getRoute($locale, RoutesEnum.Projects)}" />
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.Projects)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.Projects)}"
	/>
</svelte:head>

{#if $projectsTechnosFilter && ($projectsTechnosFilter ?? []).length > 0}
	<PageTitle textDesktop={$projectsTechnosFilter.join('; ')} {textMobile} />
{:else}
	<PageTitle textDesktop={$t('projects.title')} {textMobile} />
{/if}

<PageNavFilter
	items={$projectsTechnosListAllFilters}
	selectedItems={$projectsTechnosFilter ?? []}
	ariaLabel={$t('projects.aria.nav')}
	on:updateSelectedFilter={updateSelectedFilters}
/>

<BorderBottom />

<h2>
	//&nbsp;{$t('projects.title')}
	{#if $projectsTechnosFilter && ($projectsTechnosFilter ?? []).length > 0}
		<span>/&nbsp;{$projectsTechnosFilter.join('; ')}</span>
	{/if}
</h2>

<LayoutPage>
	<ProjectsList projects={$projectsListFiltered} baseTrad="projects" />
</LayoutPage>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

	h2 {
		margin: 2.375rem 0 0 0;
		padding: 0 1.6875rem;

		span {
			color: var(--secondary-1);
		}

		@include br.desktop {
			display: none;
		}
	}
</style>
