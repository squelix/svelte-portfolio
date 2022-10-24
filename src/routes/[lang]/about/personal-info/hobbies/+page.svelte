<script lang="ts">
	import { page } from '$app/stores';
	import PageTextContent from '$lib/commons/PageTextContent.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { hobbiesListDisplay } from '$stores/hobbies';
	import { locale, t } from '$translations';
</script>

<svelte:head>
	<title>{$t('hobbies.page.title')}</title>
	<meta name="description" content={$t('hobbies.page.description')} />
	<meta property="og:title" content={$t('hobbies.page.title')} />
	<meta property="og:description" content={$t('hobbies.page.description')} />
	<meta name="twitter:title" content={$t('hobbies.page.title')} />
	<meta name="twitter:description" content={$t('hobbies.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoHobbies)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoHobbies)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutPersonalInfoHobbies)}"
	/>
</svelte:head>

{#await $hobbiesListDisplay then value}
	<PageTextContent lines={value} mustSplit={false} mobileDisplayText="per-line" />
{/await}
