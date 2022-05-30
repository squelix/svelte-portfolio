<script context="module" lang="ts">
	import 'dayjs/locale/en.js';
	import 'dayjs/locale/fr.js';

	import Bugsnag from '@bugsnag/js';
	import dayjs from 'dayjs';
	import localeData from 'dayjs/plugin/localeData.js';
	import { LangEnum } from '$models/langs.enum';
	import { loadTranslations, t } from '$translations';
	import { get } from 'svelte/store';
	import { client } from '$stores/graphql';
	import { profile } from '$stores/profile';
	import { GET_PROFILE_QUERY } from '$graphql/profile';

	import type { Load, LoadInput, LoadOutput } from '@sveltejs/kit';
	import type { GetProfileQuery, GetProfileQueryVariables } from '$models/graphql-generated';

	export const load: Load = async ({ url }: LoadInput): Promise<LoadOutput> => {
		if (!get(bugsnagStarted)) {
			Bugsnag.start({
				apiKey: import.meta.env.VITE_BUGSNAG_ID,
				autoTrackSessions: false,
				releaseStage: import.meta.env.VITE_PLATFORM
			});
			bugsnagStarted.set(true);
		}

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
		} catch (err: any) {
			Bugsnag.notify(err);
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
	import { bugsnagStarted } from '$stores/global';
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

<slot />

<style lang="scss">
	:global {
		@import 'app.scss';
	}
</style>
