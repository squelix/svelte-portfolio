<script lang="ts">
	import Chevron from '$icons/list-chevron.svg?raw';
	import PageNavSubItem from '$lib/commons/PageNavSubItem.svelte';
	import Icon from '$lib/SvgIcon.svelte';
	import { navItemOpened, navItemSelected, subNavItemOpened } from '$stores/nav';
	import { locale, t } from '$translations';

	import { getRoute } from '$lib/routing';
	import { ENTER_KEY } from '$lib/utils/keys';
	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	type Props = {
		item: PageNavItemInterface;
	};

	let { item }: Props = $props();

	const setSelectedItem = (itemId: string) => {
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
		setSelectedItem(item.id);
	};

	const keydown = (event: KeyboardEvent): void => {
		if (event.code === ENTER_KEY) {
			selectItem();
			event.preventDefault();
			event.stopPropagation();
		}
	};
</script>

<li class="page-nav-item">
	{#if (item.items || []).length > 0}
		<button
			type="button"
			class="btn-clean page-nav-item__button"
			aria-expanded={$navItemOpened === item.id}
			onclick={selectItem}
			onkeydown={keydown}
		>
			<span
				class="page-nav-item__button__icon"
				class:page-nav-item__button__icon--expanded={$navItemOpened === item.id}
			>
				<Icon data={Chevron} width="100%" />
			</span>
			<span class="page-nav-item__button__text">
				{#if item.labelKey && !item.label}
					{$t(item.labelKey)}
				{/if}
				{#if item.label && !item.labelKey}
					{item.label}
				{/if}
			</span>
		</button>
		<ul class="page-nav-item__sub-items" aria-hidden={$navItemOpened !== item.id}>
			{#each item.items || [] as subItem, index}
				<PageNavSubItem item={subItem} {index} ariaHidden={$navItemOpened !== item.id} />
			{/each}
		</ul>
	{:else if item.href}
		<a
			class="page-nav-item__text"
			href={item.href}
			aria-label={item.ariaLabel
				? item.ariaLabel.params
					? $t(item.ariaLabel.key, item.ariaLabel.params)
					: $t(item.ariaLabel.key)
				: undefined}
			aria-hidden={$navItemOpened !== item.id}
			tabindex={$navItemOpened !== item.id ? -1 : undefined}
		>
			{#if item.labelKey && !item.label}
				{$t(item.labelKey)}
			{/if}
			{#if item.label && !item.labelKey}
				{item.label}
			{/if}
		</a>
	{:else if item.link}
		<a
			class="page-nav-item__text"
			href={getRoute($locale, item.link)}
			aria-label={item.ariaLabel
				? item.ariaLabel.params
					? $t(item.ariaLabel.key, item.ariaLabel.params)
					: $t(item.ariaLabel.key)
				: undefined}
			aria-hidden={$navItemOpened !== item.id}
			tabindex={$navItemOpened !== item.id ? -1 : undefined}
		>
			{#if item.labelKey && !item.label}
				{$t(item.labelKey)}
			{/if}
			{#if item.label && !item.labelKey}
				{item.label}
			{/if}
		</a>
	{/if}
</li>

<style lang="scss">
	@use 'lib/mixins/font' as font;
	@use 'lib/mixins/breakpoints' as br;

	.page-nav-item {
		@include font.fontWeight(400);

		& {
			font-size: 1rem;
			line-height: 1.3125;
		}

		&__text,
		&__button {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			text-align: left;
			width: 100%;
			padding: 0.5625rem 0 0.5625rem 1.6875rem;
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
			transition:
				max-height var(--transition-duration) var(--transition-easing),
				opacity var(--transition-duration) var(--transition-easing),
				gap var(--transition-duration) var(--transition-easing),
				padding var(--transition-duration) var(--transition-easing);
			display: grid;

			&[aria-hidden='true'] {
				max-height: 0;
				opacity: 0;
				gap: 0;
				padding: 0 0 0 1.6875rem;
			}

			&[aria-hidden='false'] {
				max-height: 200px;
				opacity: 1;
				gap: 0.5rem;
				padding: 1rem 0 1rem 1.6875rem;
			}
		}

		@include br.desktop {
			margin-top: -1px;

			&__text,
			&__button {
				background-color: transparent;
				border-top: 1px solid var(--lines);
				border-bottom: 1px solid var(--lines);
			}
		}
	}
</style>
