<script lang="ts">
	import { name, job } from '$stores/profile';
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { LangEnum } from '$models/langs.enum';
	import { locale } from '$translations';
</script>

<svelte:head>
	<title>{$t('home.page.title')}</title>
	<meta name="description" content={$t('home.page.description')} />
	<meta property="og:title" content={$t('home.page.title')} />
	<meta property="og:description" content={$t('home.page.description')} />
	<meta name="twitter:title" content={$t('home.page.title')} />
	<meta name="twitter:description" content={$t('home.page.description')} />
	<link rel="canonical" href="{$page.url.origin}{getRoute($locale, RoutesEnum.Home)}" />
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.Home)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.Home)}"
	/>
</svelte:head>

<h1 class="title">
	<span class="title__first">{$t('home.title.first')}</span>
	<span class="title__name">{$name}</span>
	<span class="title__job">>&nbsp;{$job}</span>
</h1>

<p class="github-text">//&nbsp;{@html $t('home.githubText')}</p>

<p class="github-link">
	<span class="github-link__const">const</span> <span class="github-link__var">githubLink</span> =
	<span class="github-link__link"
		>&quot;<a href="https://github.com/squelix" target="_blank">https://github.com/squelix</a
		>&quot;</span
	>
</p>

<style lang="scss">
	.title {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding: 0 1.6875rem;
		margin: 6rem 0 12.1875rem 0;

		&__first {
			font-weight: 400;
			font-size: 1.125rem;
			line-height: 1.3333;
			color: var(--grey);
			margin-bottom: 0.625rem;
		}

		&__name {
			font-weight: 400;
			font-size: 3.875rem;
			line-height: 1;
			color: var(--grey);
			text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
			margin-bottom: 0.3125rem;
		}

		&__job {
			font-weight: 400;
			font-size: 1.25rem;
			line-height: 1.3;
			color: var(--accent-2);
			margin-top: 0.3125rem;
		}
	}

	.github-text {
		padding: 0 1.6875rem;
		font-weight: 450;
		font-size: 0.875rem;
		line-height: 1.4;
		color: var(--secondary-1);
		margin-bottom: 1rem;
	}

	.github-link {
		padding: 0 1.6875rem;
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 1.4;
		color: var(--secondary-4);
		word-break: break-all;

		&__const {
			color: var(--secondary-3);
		}

		&__var {
			color: var(--gradient-2);
		}

		&__link {
			color: var(--accent-3);
		}
	}
</style>
