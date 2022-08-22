<script lang="ts">
	import Folder from '$icons/folder.svg?raw';
	import Chevron from '$icons/list-chevron-2.svg?raw';
	import PageNavSubItemItem from '$lib/commons/PageNavSubItemItem.svelte';
	import Icon from '$lib/SvgIcon.svelte';
	import { subNavItemOpened, subNavItemSelected } from '$stores/nav';
	import { t } from '$translations';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	export let item: PageNavItemInterface;
	export let index: number;

	const setSeletedItem = (itemId: string) => {
		if (itemId !== $subNavItemSelected) {
			subNavItemSelected.set(itemId);
		}

		if (itemId === $subNavItemOpened) {
			subNavItemOpened.set(undefined);
		} else {
			subNavItemOpened.set(itemId);
		}
	};
</script>

<li class="page-nav-sub-item">
	{#if (item.items || []).length > 0}
		<button
			type="button"
			class="btn-clean page-nav-sub-item__button"
			aria-expanded={$subNavItemOpened === item.id}
			on:click={() => setSeletedItem(item.id)}
		>
			<span
				class="page-nav-sub-item__button__icon-chevron"
				class:page-nav-sub-item__button__icon-chevron--expanded={$subNavItemOpened === item.id}
			>
				<Icon data={Chevron} width="100%" />
			</span>
			<span
				class={`page-nav-sub-item__button__icon-folder page-nav-sub-item__button__icon-folder--${index}`}
			>
				<Icon data={Folder} width="100%" />
			</span>
			{#if item.labelKey && !item.label}
				<span class="page-nav-sub-item__button__text">{$t(item.labelKey)}</span>
			{/if}
			{#if item.label && !item.labelKey}
				<span class="page-nav-sub-item__button__text">{item.label}</span>
			{/if}
		</button>
		<ul class="page-nav-sub-item__sub-items" aria-hidden={$subNavItemOpened !== item.id}>
			{#each item.items || [] as item}
				<PageNavSubItemItem {item} />
			{/each}
		</ul>
	{:else}
		{#if item.labelKey && !item.label}
			<a class="page-nav-sub-item__text" href={item.link}>{$t(item.labelKey)}</a>
		{/if}

		{#if item.label && !item.labelKey}
			<a class="page-nav-sub-item__text" href={item.link}>{item.label}</a>
		{/if}
	{/if}
</li>

<style lang="scss">
	@use 'lib/font' as font;

	.page-nav-sub-item {
		@include font.fontWeight(400);

		font-size: 1rem;
		line-height: 1.3125;

		&__text,
		&__button {
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			text-align: left;
			width: 100%;
		}

		&__button {
			&__icon-chevron {
				color: var(--secondary-1);
				display: inline-flex;
				width: 0.5rem;
				height: 0.75rem;
				transition: transform var(--transition-duration) var(--transition-easing);

				&--expanded {
					transform: rotate(90deg);
				}
			}

			&__icon-folder {
				--color-folder-0: var(--accent-3);
				--color-folder-1: var(--accent-2);
				--color-folder-2: #3a49a4;

				display: inline-flex;
				width: 0.9025rem;
				height: 0.8125rem;
				margin-left: 0.8125rem;

				@for $i from 0 to 2 {
					&--#{$i} {
						color: var(--color-folder-#{$i});
					}
				}
			}

			&__text {
				margin-left: 0.5625rem;
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
				padding: 0 0 0 1.25rem;
			}

			&[aria-hidden='false'] {
				max-height: 100px;
				opacity: 1;
				padding: 0.5625rem 0 0.5625rem 1.25rem;
				display: grid;
				gap: 0.5rem;
			}
		}
	}
</style>
