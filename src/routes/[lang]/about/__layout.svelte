<script lang="ts" context="module">
	import { aboutTitle } from '$stores/title';
	import { itemSelected } from '$stores/page-nav';

	aboutTitle.set('personal-info');
	itemSelected.set('personal-info');
</script>

<script lang="ts">
	import { aboutTitleItem } from '$stores/title';
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import PageNav from '$lib/commons/PageNav.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';

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

	const item = aboutTitleItem(pageNavItems);
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

<PageTitle item={$item} text={$t('about.title')} />

<span class="border-bottom" />

<PageNav ariaLabel={$t('about.aria.nav')} items={pageNavItems} />

<slot />

<style lang="scss">
	@use 'lib/breakpoints' as br;

	.border-bottom {
		display: none;

		@include br.desktop {
			display: block;
			grid-column: 3;
			grid-row: 1;
			border-bottom: 1px solid var(--lines);
		}
	}
</style>
