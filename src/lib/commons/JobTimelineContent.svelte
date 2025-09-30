<script lang="ts">
	import Image from '$lib/commons/Image.svelte';
	import { t } from '$translations';
	import dayjs from 'dayjs';

	import type { Job } from '$models/job';

	type Props = {
		item: Job;
		last?: boolean;
	};

	let { item, last = false }: Props = $props();

	let jobSkillsCategories = $derived(
		[...new Set((item.jobSkills ?? []).map((skill) => skill.category))]
			.map((category) => category?.replace('_', ' '))
			.filter((category) => !!category) as string[]
	);

	let jobsSkillsByCategories = $derived(
		jobSkillsCategories.map((category) => ({
			category,
			skills: (item.jobSkills ?? [])
				.filter((skill) => skill.category?.replace('_', ' ') === category)
				.map((skill) => skill.name)
				.filter((skill) => !!skill) as string[]
		}))
	);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<header>
	{#if last}
		<p class="date">{dayjs(item?.startDate).format('MMMM YYYY')}</p>
	{:else if item?.endDate}
		<p class="date">{dayjs(item?.endDate).format('MMMM YYYY')}</p>
	{:else}
		<p class="date">{$t('experiences.todayText')}</p>
	{/if}

	{#if !last}
		{#if item.picture}
			{#if item.pictureUrl}
				<a
					class="picture"
					href={item.pictureUrl}
					target="_blank"
					rel="noreferrer noopener"
					aria-label={`${$t('experiences.aria.pictureLink')}${item.companyName}`}
				>
					<Image src={item.picture} params={{ width: 100 }} class="picture__img" />
				</a>
			{:else}
				<div class="picture">
					<Image src={item.picture} params={{ width: 100 }} class="picture__img" />
				</div>
			{/if}
		{/if}
		<h3 class="title">{item.title}</h3>
		<p>{item.location.toUpperCase()}</p>
	{/if}
</header>

{#if !last}
	{#if (item?.jobMissions ?? []).length > 0}
		<h4 class="title">{$t('experiences.missions.title')}&nbsp;:</h4>
		<ul class="list">
			{#each item?.jobMissions ?? [] as mission, index (mission.slug ?? index)}
				<li>
					{mission.title}
					{#if mission.url && mission.urlName}
						-
						<a class="link" href={mission.url} target="_blank" rel="noreferrer noopener"
							>{mission.urlName}</a
						>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}

	{#if (jobsSkillsByCategories ?? []).length > 0}
		<h4 class="title">{$t('experiences.skills.title')}&nbsp;:</h4>
		<ul class="list">
			{#each jobsSkillsByCategories ?? [] as categoriesSkills (categoriesSkills.category)}
				<li>
					<span class="skill-category"
						>{$t(`experiences.skills.categories.${categoriesSkills.category}`)}&nbsp;:
					</span>
					<span>{categoriesSkills.skills.join(', ')}</span>
				</li>
			{/each}
		</ul>
	{/if}
{/if}

<style lang="scss">
	@use '$styles/lib/mixins/breakpoints' as br;
	@use '$styles/lib/mixins/font' as font;
	@use '$styles/lib/mixins/link' as link;

	.date {
		@include font.fontWeight(450);

		@include br.mobile {
			@include link.linkSelected(var(--secondary-4), 0, var(--secondary-4));

			& {
				display: inline-block;
			}
		}
	}

	.title {
		@include font.fontWeight(450);

		& {
			margin-top: 0.5rem;
		}
	}

	.list {
		list-style: disc;
		padding-left: 1rem;
	}

	.link {
		text-decoration: underline;
		transition: color var(--transition-duration) var(--transition-easing);

		&:hover {
			color: var(--secondary-4);
		}
	}

	.skill-category {
		@include font.fontWeight(500);
	}

	.picture {
		display: block;
		margin-top: 0.5rem;

		:global(.picture__img) {
			background-color: var(--secondary-4);
			padding: 0.5rem;
			border-radius: 3px;
		}
	}
</style>
