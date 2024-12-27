<script lang="ts">
	import { page } from '$app/state';
	import PageTextContent from '$lib/commons/PageTextContent.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { jobSearchLines } from '$stores/profile';
	import { locale, t } from '$translations';
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
		href="{page.url.origin}{getRoute($locale, RoutesEnum.AboutPersonalInfoBioLookingFor)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutPersonalInfoBioLookingFor)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutPersonalInfoBioLookingFor)}"
	/>
</svelte:head>

<PageTextContent lines={$jobSearchLines} mustSplit={false} />
