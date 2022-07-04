<script context="module" lang="ts">
	import 'dayjs/locale/en.js';
	import 'dayjs/locale/fr.js';

	import dayjs from 'dayjs';
	import localeData from 'dayjs/plugin/localeData.js';
	import { LangEnum } from '$models/langs.enum';
	import { loadTranslations, t } from '$translations';
	import { get } from 'svelte/store';
	import { client } from '$stores/graphql';
	import { profile } from '$stores/profile';
	import { GET_PROFILE_QUERY } from '$graphql/profile';
	import * as Sentry from '@sentry/browser';
	import { BrowserTracing } from '@sentry/tracing';

	import type { Load } from '@sveltejs/kit';
	import type { GetProfileQuery, GetProfileQueryVariables } from '$models/graphql-generated';

	export const load: Load = async ({ url }) => {
		Sentry.init({
			dsn: 'https://9b035a47c2c34b4f9fc01b5d1b2f0013@o1267809.ingest.sentry.io/6454590',
			integrations: [new BrowserTracing()],
			tracesSampleRate: 1.0,
			environment: import.meta.env.VITE_PLATFORM
		});

		const { pathname } = url;
		const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
		const route = pathname.replace(new RegExp(`^/${lang}`), '');

		dayjs.extend(localeData);
		dayjs.locale(lang);

		try {
			const { data } = await get(client).query<GetProfileQuery, GetProfileQueryVariables>({
				query: GET_PROFILE_QUERY,
				variables: {
					locale: lang
				}
			});
			profile.set(data);
		} catch (error: any) {
			Sentry.captureException(error, (scope) => {
				scope.setExtra('networkError0', error.networkError.result.errors[0]);
				scope.setExtra('error', error);
				scope.setTag('error_type', 'graphql');
				return scope;
			});
		}

		await loadTranslations(lang, route);
		return { stuff: { route, lang } };
	};
</script>

<script lang="ts">
	import 'sanitize.css';
	import 'sanitize.css/forms.css';
	import 'sanitize.css/assets.css';
	import 'sanitize.css/typography.css';
	import 'sanitize.css/reduce-motion.css';

	import { page } from '$app/stores';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { dashedName } from '$stores/profile';
	import Icon from '$lib/SvgIcon.svelte';
	import Burger from '$icons/burger.svg?raw';
	import Cross from '$icons/cross.svg?raw';

	let open = false;
</script>

<svelte:head>
	<title>{$t('common.page.title')}</title>
	<meta name="description" content={$t('collaborations.pageDescription')} />
	<meta name="author" content="Mickaël Depardon" />
	<meta name="robots" content="index,follow" />
	<meta property="og:url" content="{$page.url.origin}{$page.url.pathname}" />
	<meta property="og:site_name" content="mickael-depardon.fr" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={$t('common.page.title')} />
	<meta property="og:description" content={$t('collaborations.pageDescription')} />
	<!-- <meta
		property="og:image"
		content="https://storage.googleapis.com/wizbii-images/New%20Homepage/Collaborations/og-image.png"
	/> -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@squelix" />
	<meta name="twitter:creator" content="@squelix" />
	<meta property="twitter:url" content="{$page.url.origin}{$page.url.pathname}" />
	<meta name="twitter:title" content={$t('common.page.title')} />
	<meta name="twitter:description" content={$t('collaborations.pageDescription')} />
	<!-- <meta
		name="twitter:image"
		content="https://storage.googleapis.com/wizbii-images/New%20Homepage/Collaborations/og-image.png"
	/> -->

	<link rel="alternate" hreflang="fr" href="{$page.url.origin}{$page.url.pathname}" />
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute('/en', LangEnum.en_GB, RoutesEnum.Home)}"
	/>
	<link rel="canonical" href="{$page.url.origin}{$page.url.pathname}" />
</svelte:head>

<header class="header">
	<p class="header__name">{$dashedName}</p>

	<nav class="nav">
		<button class="btn-clean nav__btn" aria-expanded={open} on:click={() => (open = !open)}>
			<Icon data={open ? Cross : Burger} />
		</button>

		<ul class="nav__links" class:nav__links--visible={open}>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>
</header>

<main class="main">
	<slot />
</main>

<style lang="scss">
	:global {
		@import 'app.scss';
	}

	.header {
		position: relative;
		background-color: var(--primary-2);
		box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		border-right: 1px solid var(--lines);
		border-left: 1px solid var(--lines);
		border-top: 1px solid var(--lines);
		padding: 1.0625rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--mobile-nav-height);

		&__name {
			font-weight: 450;
			font-size: 1rem;
			line-height: 1.3125;
		}
	}

	.nav {
		&__links {
			position: absolute;
			margin: 0;
			overflow: hidden;
			max-height: 0;
			height: 100vh;
			top: 55px;
			left: -1px;
			right: -1px;
			opacity: 0;
			background-color: var(--primary-2);
			border-radius: 0 0 var(--border-radius) var(--border-radius);
			border: 1px solid var(--lines);
			box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
			transition: max-height 150ms ease-in-out, opacity 150ms ease-in-out, z-index 150ms ease-in-out;

			&--visible {
				z-index: 1;
				opacity: 1;
				max-height: calc(100vh - (var(--mobile-main-padding) * 2) - var(--mobile-nav-height));
			}
		}
	}

	.main {
		background: var(--primary-2) url('/svg/bg-blur.svg') no-repeat;
		background-size: cover;
		border: 1px solid var(--lines);
		box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
		border-radius: 0 0 var(--border-radius) var(--border-radius);
	}
</style>
