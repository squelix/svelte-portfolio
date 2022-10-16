<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/restrict-template-expressions */
	import Image from '$lib/commons/Image.svelte';
	import { t } from '$translations';
	import dayjs from 'dayjs';

	import type { Job } from '$models/graphql-generated';

	export let item: Omit<Job, '__typename'>;

	const getJobSkillsCategories = (): string[] => {
		return item.jobSkills?.data
			.map((skill) => skill.attributes?.category)
			.filter((category, index, self) => self.indexOf(category) === index)
			.map((category) => category?.replace('_', ' '))
			.filter((category) => !!category) as string[];
	};

	const groupSkillsByCategories = (): { category: string; skills: string[] }[] => {
		return getJobSkillsCategories().map((category) => ({
			category,
			skills: item.jobSkills?.data
				.filter((skill) => skill.attributes?.category?.replace('_', ' ') === category)
				.map((skill) => skill.attributes?.name)
				.filter((skill) => !!skill) as string[]
		}));
	};
</script>

<header>
	<p class="date">{dayjs(item?.startDate).format('MMMM YYYY')}</p>
	{#if item.picture?.data?.attributes}
		{#if item.pictureUrl}
			<a
				class="picture"
				href={item.pictureUrl}
				target="_blank"
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
</header>

<h4 class="title">Missions&nbsp;:</h4>
<ul class="list">
	{#each item?.jobMissions?.data ?? [] as mission}
		<li>
			{mission.attributes?.title}
			{#if mission.attributes?.url && mission.attributes?.urlName}
				-
				<a class="link" href={mission.attributes?.url} target="_blank"
					>{mission.attributes?.urlName}</a
				>
			{/if}
		</li>
	{/each}
</ul>

<h4 class="title">Compétences&nbsp;:</h4>
<ul class="list">
	{#each groupSkillsByCategories() ?? [] as categoriesSkills}
		<li>
			<span class="skill-category">{categoriesSkills.category}&nbsp;: </span>
			<span>{categoriesSkills.skills.join(', ')}</span>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;
	@use 'lib/mixins/font' as font;
	@use 'lib/mixins/link' as link;

	.date {
		@include font.fontWeight(450);

		@include br.mobile {
			@include link.linkSelected(var(--secondary-4), 0, var(--secondary-4));

			display: inline-block;
		}
	}

	.picture {
		margin-top: 0.5rem;
	}

	.title {
		@include font.fontWeight(450);

		margin-top: 0.5rem;
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

	.picture :global(.picture__img) {
		background-color: var(--secondary-4);
		padding: 0.5rem;
		border-radius: 3px;
	}
</style>
