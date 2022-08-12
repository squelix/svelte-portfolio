<script lang="ts">
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import { locale } from '$translations';
	import { formattedDesktopJobSearch, formattedMobileJobSearch } from '$stores/profile';
</script>

<svelte:head>
	<title>{$t('looking-for.page.title')}</title>
	<meta name="description" content={$t('looking-for.page.description')} />
	<meta property="og:title" content={$t('looking-for.page.title')} />
	<meta property="og:description" content={$t('looking-for.page.description')} />
	<meta name="twitter:title" content={$t('looking-for.page.title')} />
	<meta name="twitter:description" content={$t('looking-for.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoBioLookingFor)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoBioLookingFor)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutPersonalInfoBioLookingFor)}"
	/>
</svelte:head>

<div class="content">
	<p class="bio bio--desktop display-only-desktop">
		{@html $formattedDesktopJobSearch}
	</p>

	<p class="bio bio--mobile display-only-mobile">
		{@html $formattedMobileJobSearch}
	</p>
</div>

<style lang="scss">
	@use 'lib/breakpoints' as br;

	.bio {
		@include br.desktop {
			&--desktop {
				margin: 0;
				counter-reset: line;
				display: grid;
				column-gap: 2.5rem;
				grid-template-columns: fit-content(100%) minmax(0, 1fr);
			}
		}
	}

	.content {
		color: var(--secondary-1);
		padding: 1.0625rem 1.6875rem 0 1.6875rem;

		@include br.desktop {
			padding: 1.0625rem 2.375rem 0 2.375rem;
		}
	}
</style>
