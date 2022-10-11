<script lang="ts">
	import Chevron from '$icons/list-chevron.svg?raw';
	import PageNavFilterSubItem from '$lib/commons/PageNavFilterSubItem.svelte';
	import Icon from '$lib/SvgIcon.svelte';
	import { navItemOpened, navItemSelected, subNavItemOpened } from '$stores/nav';
	import { t } from '$translations';

	import type { PageNavFilterItemInterface } from '$models/page-nav-filter-item.interface';

	export let item: PageNavFilterItemInterface;
	export let selectedItems: string[];

	const ENTER_KEY = 'Enter';

	const setSeletedItem = (itemId: string) => {
		if (itemId !== $navItemSelected) {
			navItemSelected.set(itemId);
		}

		if (itemId === $navItemOpened) {
			navItemOpened.set(undefined);
		} else {
			navItemOpened.set(itemId);
		}
		subNavItemOpened.set(undefined);
	};

	const selectItem = (): void => {
		setSeletedItem(item.id);
	};

	const keydown = ({ code }: KeyboardEvent): void => {
		if (code === ENTER_KEY) {
			selectItem();
		}
	};
</script>

<li class="page-nav-filter-item">
	<button
		type="button"
		class="btn-clean page-nav-filter-item__button"
		aria-expanded={$navItemOpened === item.id}
		on:click={selectItem}
		on:keydown={keydown}
	>
		<span
			class="page-nav-filter-item__button__icon"
			class:page-nav-filter-item__button__icon--expanded={$navItemOpened === item.id}
		>
			<Icon data={Chevron} width="100%" />
		</span>
		<span class="page-nav-filter-item__button__text">
			{#if item.labelKey && !item.label}
				{$t(item.labelKey)}
			{/if}
			{#if item.label && !item.labelKey}
				{item.label}
			{/if}
		</span>
	</button>
	<ul class="page-nav-filter-item__sub-items" aria-hidden={$navItemOpened !== item.id}>
		{#each item.items || [] as subItem}
			<PageNavFilterSubItem
				on:updateSelectedFilter
				checked={selectedItems.includes(subItem.id)}
				item={subItem}
			/>
		{/each}
	</ul>
</li>

<style lang="scss">
	@use 'lib/mixins/font' as font;
	@use 'lib/mixins/breakpoints' as br;

	.page-nav-filter-item {
		@include font.fontWeight(400);

		font-size: 1rem;
		line-height: 1.3125;

		&__button {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			text-align: left;
			width: 100%;
			padding: 0.3125rem 0 0.3125rem 1.6875rem;
			background-color: var(--lines);
			margin: 0;

			&__icon {
				display: inline-flex;
				width: 0.375rem;
				height: 0.5625rem;
				transition: transform var(--transition-duration) var(--transition-easing);

				&--expanded {
					transform: rotate(90deg);
				}
			}

			&__text {
				margin-left: 0.75rem;
			}
		}

		&__sub-items {
			overflow: hidden;
			transition: max-height var(--transition-duration) var(--transition-easing),
				opacity var(--transition-duration) var(--transition-easing),
				padding var(--transition-duration) var(--transition-easing),
				gap var(--transition-duration) var(--transition-easing);
			display: grid;

			&[aria-hidden='true'] {
				max-height: 0;
				opacity: 0;
				gap: 0;
				padding: 0 0 0 1.6875rem;
			}

			&[aria-hidden='false'] {
				max-height: 1000px;
				opacity: 1;
				gap: 1rem;
				padding: 1rem 0 1rem 1.6875rem;
			}
		}

		@include br.desktop {
			margin-top: -1px;

			&__button {
				background-color: transparent;
				border-top: 1px solid var(--lines);
				border-bottom: 1px solid var(--lines);
			}
		}
	}
</style>
