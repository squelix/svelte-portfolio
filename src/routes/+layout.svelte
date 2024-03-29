<script lang="ts">
	import 'sanitize.css';
	import 'sanitize.css/assets.css';
	import 'sanitize.css/forms.css';
	import 'sanitize.css/reduce-motion.css';
	import 'sanitize.css/typography.css';
	import '../styles/app.scss';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Footer from '$lib/commons/Footer.svelte';
	import Header from '$lib/commons/Header.svelte';
	import { RoutesEnum, isRouteActive } from '$lib/routing';
	import { strapiUri, vercelAnalyticsId } from '$stores/env';
	import { picture } from '$stores/profile';
	import { locale } from '$translations';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	const TAB_KEY = 'Tab';

	$: {
		if (browser && $vercelAnalyticsId) {
			injectSpeedInsights();
		}
	}

	const toggleOutline = (value: boolean) => {
		if (!value) {
			document.body.classList.add('focus-off');
			document.body.classList.remove('focus-on');
		} else {
			document.body.classList.remove('focus-off');
			document.body.classList.add('focus-on');
		}
	};

	const keyDownEvent = (event: KeyboardEvent) => {
		if (event.code === TAB_KEY) {
			toggleOutline(true);
		}
	};

	const mouseDownEvent = () => {
		toggleOutline(false);
	};
</script>

<svelte:head>
	<meta name="author" content="Mickaël Depardon" />
	<meta name="robots" content="index,follow" />
	<meta property="og:url" content="{$page.url.origin}{$page.url.pathname}" />
	<meta property="og:site_name" content="mickael-depardon.fr" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="{$page.url.origin}{$page.url.pathname}" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@squelix" />
	<meta name="twitter:creator" content="@squelix" />
	<meta property="twitter:url" content="{$page.url.origin}{$page.url.pathname}" />

	{#if $picture}
		<meta property="og:image" content={$picture} />
		<meta name="twitter:image" content={$picture} />
	{/if}

	{#if !!$strapiUri}
		<link rel="preconnect" href={$strapiUri} />
	{/if}
</svelte:head>

<svelte:window on:mousedown={mouseDownEvent} on:keydown={keyDownEvent} />

<Header />

<main
	class="main"
	class:main--home={isRouteActive($page.url.pathname, { route: RoutesEnum.Home, lang: $locale })}
>
	<slot />
</main>

<Footer />

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

	.main {
		background-color: var(--primary-2);
		border: 1px solid var(--lines);
		box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
		border-radius: 0 0 var(--border-radius) var(--border-radius);
		min-height: calc(100vh - (var(--mobile-main-padding) * 2) - var(--nav-height));
		padding-bottom: calc(3.0625rem + 3rem);

		&--home {
			background: var(--primary-2) url('/svg/bg-blur-mobile.svg') no-repeat;
			background-size: cover;
		}

		@include br.desktop {
			min-height: auto;
			height: calc(100vh - (var(--desktop-main-padding) * 2) - var(--nav-height));

			&--home {
				background: var(--primary-2) url('/svg/bg-blur-desktop.svg') no-repeat;
				background-position: 82% center;
				background-size: 780px;
			}

			&:not(.main--home) {
				display: grid;
				grid-template-columns: 311px fit-content(100%) minmax(0, 1fr);
				grid-template-rows: 40px minmax(0, 1fr);
				padding-bottom: 3rem;
			}
		}
	}
</style>
