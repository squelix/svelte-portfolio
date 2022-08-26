<script lang="ts">
	import Image from '$lib/commons/Image.svelte';
	import Link from '$lib/commons/Link.svelte';
	import TechnoIcon from '$lib/commons/TechnoIcon.svelte';
	import { technosIcons } from '$lib/technos-icons';
	import { locale, t } from '$translations';
	import slugify from 'slugify';

	import type { Project } from '$models/graphql-generated';

	export let project: Project;
	export let index: number;
</script>

<li>
	<p class="title title--desktop">
		//&nbsp;{$t('projects.card.title')}&nbsp;{index + 1}
		<span class="title--project"
			>//&nbsp;_{slugify(project.title, { locale: $locale, lower: true })}</span
		>
	</p>

	<p class="title title--mobile">
		{$t('projects.card.title')}&nbsp;{index + 1}
		<span class="title--project"
			>/&nbsp;_{slugify(project.title, { locale: $locale, lower: true })}</span
		>
	</p>

	<div class="card">
		{#if project.picture?.data?.attributes}
			<Image
				class="card__img"
				src={project.picture.data?.attributes?.url}
				params={{ width: 370 }}
			/>
		{/if}

		<div class="card__bottom">
			{#if project.mainTechno?.data?.attributes?.name}
				<TechnoIcon
					color={project.mainTechno.data.attributes.color}
					icon={technosIcons[project.mainTechno.data.attributes.slug]}
				/>
			{/if}
			<p class="card__description">{project.description}</p>
			<Link href={project.url} aria-label={project.urlName} target="_blank"
				>{$t('projects.card.link')}</Link
			>
		</div>
	</div>
</li>

<style lang="scss">
	@use 'lib/font' as font;
	@use 'lib/breakpoints' as br;

	li {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	.title {
		font-style: normal;
		font-weight: 700;
		font-size: 1rem;
		line-height: 1.3125;
		color: #5565e8;
		margin-bottom: 0.9375rem;

		&--desktop {
			display: none;
		}

		&--project {
			@include font.fontWeight(450);

			color: var(--secondary-1);
		}

		@include br.desktop {
			&--desktop {
				display: block;
			}

			&--mobile {
				display: none;
			}
		}
	}

	.card {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		flex: 1;
		background-color: var(--primary-3);
		border: 1px solid var(--lines);
		border-radius: 15px;
		overflow: hidden;
		position: relative;

		&__bottom {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: space-between;
			flex: 1;
			padding: 1.8125rem 1.9375rem 2rem 1.9375rem;
		}

		&__description {
			@include font.fontWeight(450);

			flex: 1;
			font-size: 1rem;
			line-height: 1.3;
			font-style: normal;
			margin-bottom: 1.4375rem;
			color: var(--secondary-1);
		}
	}

	.card :global(.card__img) {
		width: 100%;
		height: 9.125rem;
		object-fit: cover;
		object-position: center;
		border-bottom: 1px solid var(--lines);
	}
</style>
