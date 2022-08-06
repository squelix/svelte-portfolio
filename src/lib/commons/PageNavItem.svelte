<script lang="ts">
	import PageNavSubItem from './PageNavSubItem.svelte';
	import Icon from '$lib/SvgIcon.svelte';
	import Chevron from '$icons/list-chevron.svg?raw';
	import { itemSelected } from '$stores/page-nav';
	import { itemSelected as subItemSelected } from '$stores/page-sub-nav';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	export let item: PageNavItemInterface;

	const setSeletedItem = (itemId: string) => {
		if (itemId === $itemSelected) {
			itemSelected.set(undefined);
		} else {
			itemSelected.set(itemId);
		}
		subItemSelected.set(undefined);
	};
</script>

<li class="page-nav-item">
	{#if (item.items || []).length > 0}
		<button
			type="button"
			class="btn-clean page-nav-item__button"
			aria-expanded={$itemSelected === item.id}
			on:click={() => setSeletedItem(item.id)}
		>
			<span
				class="page-nav-item__button__icon"
				class:page-nav-item__button__icon--expanded={$itemSelected === item.id}
			>
				<Icon data={Chevron} width="100%" />
			</span>
			<span class="page-nav-item__button__text">{item.label}</span>
		</button>
		<ul class="page-nav-item__sub-items" aria-hidden={$itemSelected !== item.id}>
			{#each item.items || [] as item, index}
				<PageNavSubItem {item} {index} />
			{/each}
		</ul>
	{:else}
		<a class="page-nav-item__text" href={item.link}>{item.label}</a>
	{/if}
</li>

<style lang="scss">
	.page-nav-item {
		font-weight: normal;
		font-size: 1rem;
		line-height: 1.3125;

		&__text,
		&__button {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			text-align: left;
			width: 100%;
			padding: 0.3125rem 0 0.3125rem 1.6875rem;
			background-color: var(--lines);
			margin: 0;
		}

		&__button {
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
				padding var(--transition-duration) var(--transition-easing);

			&[aria-hidden='true'] {
				max-height: 0;
				opacity: 0;
				padding: 0 0 0 1.6875rem;
			}

			&[aria-hidden='false'] {
				max-height: 200px;
				opacity: 1;
				display: grid;
				gap: 0.5rem;
				padding: 1rem 0 1rem 1.6875rem;
			}
		}
	}
</style>
