<script lang="ts">
	import Image from '$lib/commons/Image.svelte';
	import { t } from '$translations';
	import dayjs from 'dayjs';

	import type { Job } from '$models/graphql-generated';

	export let item: Omit<Job, '__typename'>;
	export let last = false;

	const getJobSkillsCategories = (): string[] =>
		[...new Set(item.jobSkills?.data.map((skill) => skill.attributes?.category))]
			.map((category) => category?.replace('_', ' '))
			.filter((category) => !!category) as string[];

	const groupSkillsByCategories = (): { category: string; skills: string[] }[] =>
		getJobSkillsCategories().map((category) => ({
			category,
			skills: item.jobSkills?.data
				.filter((skill) => skill.attributes?.category?.replace('_', ' ') === category)
				.map((skill) => skill.attributes?.name)
				.filter((skill) => !!skill) as string[]
		}));
</script>

<header>
	{#if last}
		<p class="date">{dayjs(item?.startDate).format('MMMM YYYY')}</p>
	{:else if item?.endDate}
		<p class="date">{dayjs(item?.endDate).format('MMMM YYYY')}</p>
	{:else}
		<p class="date">{$t('experiences.todayText')}</p>
	{/if}

	{#if !last}
		{#if item.picture?.data?.attributes}
			{#if item.pictureUrl}
				<a
					class="picture"
					href={item.pictureUrl}
					target="_blank"
					rel="noreferrer noopener"
					aria-label={`${$t('experiences.aria.pictureLink')}${item.companyName}`}
				>
					<Image
						src={item.picture?.data?.attributes?.url}
						params={{ width: 100 }}
						class="picture__img"
					/>
				</a>
			{:else}
				<div class="picture">
					<Image
						src={item.picture?.data?.attributes?.url}
						params={{ width: 100 }}
						class="picture__img"
					/>
				</div>
			{/if}
		{/if}
		<h3 class="title">{item.title}</h3>
		<p>{item.location.toUpperCase()}</p>
	{/if}
</header>

{#if !last}
	{#if (item?.jobMissions?.data ?? []).length > 0}
		<h4 class="title">{$t('experiences.missions.title')}&nbsp;:</h4>
		<ul class="list">
			{#each item?.jobMissions?.data ?? [] as mission}
				<li>
					{mission.attributes?.title}
					{#if mission.attributes?.url && mission.attributes?.urlName}
						-
						<a class="link" href={mission.attributes?.url} target="_blank" rel="noreferrer noopener"
							>{mission.attributes?.urlName}</a
						>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}

	{#if (groupSkillsByCategories() ?? []).length > 0}
		<h4 class="title">{$t('experiences.skills.title')}&nbsp;:</h4>
		<ul class="list">
			{#each groupSkillsByCategories() ?? [] as categoriesSkills}
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
	@use 'lib/mixins/breakpoints' as br;
	@use 'lib/mixins/font' as font;
	@use 'lib/mixins/link' as link;

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
