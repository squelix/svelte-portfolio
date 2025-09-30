<script lang="ts">
	import Image from '$lib/commons/Image.svelte';
	import { t } from '$translations';

	import type { School } from '$models/school';

	type Props = {
		item: School;
	};

	let { item }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<header>
	<p class="date">
		{item?.startYear} - {item?.endYear}
	</p>
	{#if item.picture}
		{#if item.pictureUrl}
			<a
				class="picture"
				href={item.pictureUrl}
				target="_blank"
				rel="noreferrer noopener"
				aria-label={`${$t('schools.aria.pictureLink')}${item.schoolName}`}
			>
				<Image src={item.picture} params={{ width: 100 }} class="picture__img" />
			</a>
		{:else}
			<div class="picture">
				<Image src={item.picture} params={{ width: 100 }} class="picture__img" />
			</div>
		{/if}
	{/if}
	<h3 class="title">{item.diploma}</h3>
	<p>{item.address.toUpperCase()}</p>
</header>

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

	.picture {
		margin-top: 0.5rem;
	}

	.title {
		@include font.fontWeight(450);

		& {
			margin-top: 0.5rem;
		}
	}

	.picture :global(.picture__img) {
		background-color: var(--secondary-4);
		padding: 0.5rem;
		border-radius: 3px;
	}
</style>
