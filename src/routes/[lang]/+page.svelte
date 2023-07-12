<script lang="ts">
	import { page } from '$app/stores';
	import Snake from '$lib/commons/Snake.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { github, job, name } from '$stores/profile';
	import { locale, t } from '$translations';
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

<div class="page">
	<div class="page__left">
		<h1 class="title">
			<span class="title__first">{$t('home.title.first')}</span>
			<span class="title__name">{$name}</span>
			<span class="title__job">>&nbsp;{$job}</span>
		</h1>

		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<p class="github-text">//&nbsp;{@html $t('home.githubText')}</p>

		{#if $github?.attributes?.url}
			<p class="github-link">
				<span class="github-link__const">const</span>
				<span class="github-link__var">githubLink</span>
				=
				<span class="github-link__link"
					>&quot;<a href={$github?.attributes?.url} target="_blank" rel="noreferrer noopener"
						>{$github?.attributes?.url}</a
					>&quot;</span
				>
			</p>
		{/if}
	</div>

	<div class="page__right">
		<Snake />
	</div>
</div>

<style lang="scss">
	@use 'lib/mixins/font' as font;
	@use 'lib/mixins/breakpoints' as br;

	.page {
		&__right {
			display: none;
		}

		@include br.desktop {
			display: grid;
			align-items: center;
			gap: 4.6875rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-template-rows: minmax(0, 1fr);
			height: fill-available;
			padding: 0 2rem;

			&__left {
				justify-self: end;
			}

			&__right {
				display: block;

				@media (width <= 1299px) {
					width: fit-content;
				}
			}
		}
	}

	.title {
		display: flex;
		flex-flow: column wrap;
		padding: 0 1.6875rem;
		margin: 5rem 0;

		&__first {
			@include font.fontWeight(400);

			font-size: 1.125rem;
			line-height: 1.3333;
			color: var(--grey);
			margin-bottom: 0.625rem;
		}

		&__name {
			@include font.fontWeight(400);

			font-size: 3.625rem;
			line-height: 1;
			color: var(--grey);
			text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
			margin-bottom: 0.3125rem;
		}

		&__job {
			@include font.fontWeight(400);

			font-size: 1.25rem;
			line-height: 1.3;
			color: var(--accent-2);
			margin-top: 0.3125rem;
		}

		@include br.desktop {
			padding-right: 0;
			margin-top: 0;
			margin-bottom: 5.0625rem;

			&__first {
				@include font.fontWeight(450);

				font-size: 1.125rem;
				line-height: 1.3333;
			}

			&__name {
				line-height: 1.3065;
				font-size: 3.875rem;
			}

			&__job {
				@include font.fontWeight(450);

				color: var(--secondary-3);
				font-size: 2rem;
				line-height: 1.3125;
			}
		}
	}

	.github-text {
		@include font.fontWeight(450);

		padding: 0 1.6875rem;
		font-size: 0.875rem;
		line-height: 1.4;
		color: var(--secondary-1);
		margin-bottom: 1rem;

		@include br.desktop {
			padding-right: 0;
		}
	}

	.github-link {
		@include font.fontWeight(500);

		padding: 0 1.6875rem;
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
			text-decoration: underline;
		}

		@include br.desktop {
			padding-right: 0;
		}
	}
</style>
