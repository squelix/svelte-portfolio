<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call */
	import Image from '$lib/commons/Image.svelte';
	import dayjs from 'dayjs';

	import type { Job } from '$models/graphql-generated';

	export let job: Omit<Job, '__typename'>;

	const getJobSkillsCategories = (): string[] => {
		return job.jobSkills?.data
			.map((skill) => skill.attributes?.category)
			.filter((category, index, self) => self.indexOf(category) === index)
			.map((category) => category?.replace('_', ' '))
			.filter((category) => !!category) as string[];
	};

	const groupSkillsByCategories = (): { category: string; skills: string[] }[] => {
		return getJobSkillsCategories().map((category) => ({
			category,
			skills: job.jobSkills?.data
				.filter((skill) => skill.attributes?.category?.replace('_', ' ') === category)
				.map((skill) => skill.attributes?.name)
				.filter((skill) => !!skill) as string[]
		}));
	};
</script>

<header>
	<p class="date">{dayjs(job?.startDate).format('MMMM YYYY')}</p>
	{#if job.picture?.data?.attributes}
		<div class="picture">
			<Image
				src={job.picture?.data?.attributes?.url}
				params={{ width: 100 }}
				style={'background-color: var(--secondary-4); padding: 0.5rem; border-radius: 3px;'}
			/>
		</div>
	{/if}
	<h3 class="title">{job.title}</h3>
	<p>{job.location.toUpperCase()}</p>
</header>

<h4 class="title">Missions&nbsp;:</h4>
<ul class="list">
	{#each job?.jobMissions?.data ?? [] as mission}
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
	}

	.skill-category {
		@include font.fontWeight(500);
	}
</style>
