<script lang="ts">
	import { page } from '$app/stores';
	import Project from '$lib/commons/Project.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { schoolsProjectsList } from '$stores/schools';
	import { locale, t } from '$translations';
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
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoEducationProjects)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(
			LangEnum.fr_FR,
			RoutesEnum.AboutPersonalInfoEducationProjects
		)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(
			LangEnum.en_GB,
			RoutesEnum.AboutPersonalInfoEducationProjects
		)}"
	/>
</svelte:head>

<section class="page-content">
	<ul class="list">
		{#each $schoolsProjectsList as project, index}
			{#if project}
				<Project {project} {index} />
			{/if}
		{/each}
	</ul>
</section>

<style lang="scss">
	@use 'lib/breakpoints' as br;

	.list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(0, 18.75rem));
		grid-auto-rows: minmax(min-content, max-content);
		gap: 1.25rem;
		padding: 0 1.6875rem;
		margin-top: 1.0625rem;

		@include br.desktop {
			grid-template-columns: repeat(auto-fit, minmax(0, 23.1469rem));
			padding: 1.0625rem 2.375rem 0 2.375rem;
		}
	}
</style>
