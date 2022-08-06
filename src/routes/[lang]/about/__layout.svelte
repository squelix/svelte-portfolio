<script lang="ts">
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import PageNav from '$lib/commons/PageNav.svelte';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	const pageNavItems: PageNavItemInterface[] = [
		{
			// Personal infos
			id: 'personal-info',
			label: $t('about.nav.0'),
			items: [
				{
					id: 'personal-info-bio',
					label: $t('about.personal-info-subnav.0'),
					items: [
						{
							id: 'personal-info-bio-biography',
							label: $t('about.personal-info-subnav-bio.0'),
							link: RoutesEnum.AboutPersonalInfoBio
						},
						{
							id: 'personal-info-bio-looking-for',
							label: $t('about.personal-info-subnav-bio.1'),
							link: RoutesEnum.AboutPersonalInfoBioLookingFor
						}
					]
				},
				{
					id: 'personal-info-education',
					label: $t('about.personal-info-subnav.1'),
					items: [
						{
							id: 'personal-info-education-schools',
							label: $t('about.personal-info-subnav-education.0'),
							link: RoutesEnum.AboutPersonalInfoEducationSchools
						},
						{
							id: 'personal-info-education-projects',
							label: $t('about.personal-info-subnav-education.1'),
							link: RoutesEnum.AboutPersonalInfoEducationProjects
						}
					]
				}
			]
		},
		// Professional infos
		{
			id: 'professional-info',
			label: $t('about.nav.1'),
			items: [
				{ id: 'professional-info-skills', label: $t('about.professional-info-subnav.0') },
				{
					id: 'professional-info-languages',
					label: $t('about.professional-info-subnav.1')
					// link: ''
				},
				{
					id: 'professional-info-projects',
					label: $t('about.professional-info-subnav.2')
					// link: ''
				}
			]
		},
		{ id: 'hobbies', label: $t('about.nav.2') }
	];
</script>

<svelte:head>
	<title>{$t('about.page.title')}</title>
	<meta name="description" content={$t('about.page.description')} />
	<meta property="og:title" content={$t('about.page.title')} />
	<meta property="og:description" content={$t('about.page.description')} />
	<meta name="twitter:title" content={$t('about.page.title')} />
	<meta name="twitter:description" content={$t('about.page.description')} />
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.About)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.About)}"
	/>
</svelte:head>

<h1 class="title">{$t('about.title')}</h1>

<PageNav ariaLabel={$t('about.aria.nav')} items={pageNavItems} />

<slot />

<style lang="scss">
	.title {
		padding: 1.3125rem 0 1.8125rem 1.6875rem;
	}
</style>
