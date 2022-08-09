<script lang="ts">
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { formattedDesktopBiography, formattedMobileBiography } from '$stores/profile';
	import { LangEnum } from '$models/langs.enum';
	import { locale } from '$translations';
</script>

<svelte:head>
	<title>{$t('bio.page.title')}</title>
	<meta name="description" content={$t('bio.page.description')} />
	<meta property="og:title" content={$t('bio.page.title')} />
	<meta property="og:description" content={$t('bio.page.description')} />
	<meta name="twitter:title" content={$t('bio.page.title')} />
	<meta name="twitter:description" content={$t('bio.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoBio)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoBio)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutPersonalInfoBio)}"
	/>
</svelte:head>

<div class="content">
	<pre class="bio bio--desktop display-only-desktop">
		{@html $formattedDesktopBiography}
	</pre>

	<p class="bio bio--mobile display-only-mobile">
		{@html $formattedMobileBiography}
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
