<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-call */
	import { page } from '$app/stores';
	import JobTimelineContent from '$lib/commons/JobTimelineContent.svelte';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { LangEnum } from '$models/langs.enum';
	import { jobsList } from '$stores/jobs';
	import { locale, t } from '$translations';
	import {
		Timeline,
		TimelineConnector,
		TimelineContent,
		TimelineItem,
		TimelineOppositeContent,
		TimelineSeparator
	} from 'svelte-vertical-timeline';
</script>

<svelte:head>
	<title>{$t('experiences.page.title')}</title>
	<meta name="description" content={$t('experiences.page.description')} />
	<meta property="og:title" content={$t('experiences.page.title')} />
	<meta property="og:description" content={$t('experiences.page.description')} />
	<meta name="twitter:title" content={$t('experiences.page.title')} />
	<meta name="twitter:description" content={$t('experiences.page.description')} />
	<link
		rel="canonical"
		href="{$page.url.origin}{getRoute($locale, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.AboutProfessionalInfoExperiences)}"
	/>
</svelte:head>

<section class="content">
	<Timeline style={'padding: 0; color: var(--secondary-1);'}>
		{#each $jobsList as job}
			<TimelineItem>
				<TimelineOppositeContent
					slot="opposite-content"
					style={'flex: 0; margin-left: 0; margin-right: 0;'}
				/>
				<TimelineSeparator style={'color: var(--secondary-1);'}>
					<b>◯</b>
					<TimelineConnector style={'background-color: var(--secondary-1);'} />
				</TimelineSeparator>
				<TimelineContent>
					<JobTimelineContent {job} />
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</section>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

	.content {
		grid-column: 2/4;
		padding: 1.0625rem;

		@include br.desktop {
			overflow-y: auto;
			padding: 1.0625rem 2.375rem;
		}
	}
</style>
