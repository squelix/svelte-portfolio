<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/restrict-template-expressions */
	import Image from '$lib/commons/Image.svelte';
	import { t } from '$translations';

	import type { School } from '$models/graphql-generated';

	export let item: Omit<School, '__typename'>;
</script>

<header>
	<p class="date">
		{item?.startYear} - {item?.endYear}
	</p>
	{#if item.picture?.data?.attributes}
		{#if item.pictureUrl}
			<a
				class="picture"
				href={item.pictureUrl}
				target="_blank"
				aria-label={`${$t('schools.aria.pictureLink')}${item.schoolName}`}
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
	<h3 class="title">{item.diploma}</h3>
	<p>{item.address.toUpperCase()}</p>
</header>

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

	.picture :global(.picture__img) {
		background-color: var(--secondary-4);
		padding: 0.5rem;
		border-radius: 3px;
	}
</style>
