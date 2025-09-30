<script lang="ts">
	import { page } from '$app/state';
	import Folder from '$icons/folder.svg?raw';
	import Chevron from '$icons/list-chevron-2.svg?raw';
	import PageNavSubItemItem from '$lib/commons/PageNavSubItemItem.svelte';
	import { getRoute, isRouteActive } from '$lib/routing';
	import Icon from '$lib/SvgIcon.svelte';
	import { ENTER_KEY } from '$lib/utils/keys';
	import { subNavItemOpened, subNavItemSelected } from '$stores/nav';
	import { locale, t } from '$translations';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	type Props = {
		item: PageNavItemInterface;
		index: number;
		ariaHidden: boolean;
	};

	let { item, index, ariaHidden }: Props = $props();

	const setSelectedItem = (itemId: string) => {
		if (itemId !== $subNavItemSelected) {
			subNavItemSelected.set(itemId);
		}

		if (itemId === $subNavItemOpened) {
			subNavItemOpened.set(undefined);
		} else {
			subNavItemOpened.set(itemId);
		}
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

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<li class="page-nav-sub-item">
	{#if (item.items || []).length > 0}
		<button
			type="button"
			class="btn-clean page-nav-sub-item__button"
			class:page-nav-sub-item__button--expanded={$subNavItemOpened === item.id}
			aria-expanded={$subNavItemOpened === item.id}
			onclick={selectItem}
			onkeydown={keydown}
			tabindex={ariaHidden ? -1 : undefined}
			aria-hidden={ariaHidden}
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
			<span class="page-nav-sub-item__button__text">
				{#if item.labelKey && !item.label}
					{$t(item.labelKey)}
				{/if}
				{#if item.label && !item.labelKey}
					{item.label}
				{/if}
			</span>
		</button>
		<ul class="page-nav-sub-item__sub-items" aria-hidden={$subNavItemOpened !== item.id}>
			{#each item.items || [] as subItem (subItem.id)}
				<PageNavSubItemItem
					item={subItem}
					ariaHidden={$subNavItemOpened !== item.id || ariaHidden}
				/>
			{/each}
		</ul>
	{:else if item.link}
		<a
			class="page-nav-sub-item__link"
			class:page-nav-sub-item__link--icon={!!item.icon}
			class:page-nav-sub-item__link--active={isRouteActive(page.url.pathname, {
				route: item.link,
				lang: $locale
			})}
			href={getRoute($locale, item.link)}
			aria-label={item.ariaLabel
				? item.ariaLabel.params
					? $t(item.ariaLabel.key, item.ariaLabel.params)
					: $t(item.ariaLabel.key)
				: undefined}
			aria-hidden={ariaHidden}
			tabindex={ariaHidden ? -1 : undefined}
		>
			{#if item.icon}
				<span class="page-nav-sub-item__link__icon">
					<Icon data={item.icon} width="100%" />
				</span>
			{/if}
			{#if item.labelKey && !item.label}
				<span class="page-nav-sub-item__link__label">
					{$t(item.labelKey)}
				</span>
			{/if}
			{#if item.label && !item.labelKey}
				<span class="page-nav-sub-item__link__label">
					{item.label}
				</span>
			{/if}
		</a>
	{:else if item.href}
		<a
			class="page-nav-sub-item__link"
			class:page-nav-sub-item__link--icon={!!item.icon}
			href={item.href}
			aria-label={item.ariaLabel
				? item.ariaLabel.params
					? $t(item.ariaLabel.key, item.ariaLabel.params)
					: $t(item.ariaLabel.key)
				: undefined}
			aria-hidden={ariaHidden}
			tabindex={ariaHidden ? -1 : undefined}
		>
			{#if item.icon}
				<span class="page-nav-sub-item__link__icon">
					<Icon data={item.icon} width="100%" />
				</span>
			{/if}
			{#if item.labelKey && !item.label}
				<span class="page-nav-sub-item__link__label">
					{$t(item.labelKey)}
				</span>
			{/if}
			{#if item.label && !item.labelKey}
				<span class="page-nav-sub-item__link__label">
					{item.label}
				</span>
			{/if}
		</a>
	{/if}
</li>

<style lang="scss">
	@use '$styles/lib/mixins/font' as font;

	.page-nav-sub-item {
		@include font.fontWeight(400);

		& {
			font-size: 1rem;
			line-height: 1.3125;
			color: var(--secondary-1);
		}

		&__link,
		&__button {
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			text-align: left;
			width: 100%;
		}

		&__link {
			--first-column-width: 1.0137rem;

			transition: color var(--transition-duration) var(--transition-easing);

			&--icon {
				display: grid;
				grid-template-columns: minmax(0, var(--first-column-width)) minmax(0, 1fr);
				gap: 0.5175rem;
			}

			&--active {
				color: var(--secondary-4);
			}

			&__label {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				line-clamp: 1;
				overflow: hidden;
				padding-right: 0.625rem;
			}

			&__icon {
				width: var(--first-column-width);
				height: auto;
			}

			&:hover {
				color: var(--secondary-4);
			}
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

			&--expanded {
				color: var(--secondary-4);
			}
		}

		&__sub-items {
			overflow: hidden;
			transition:
				max-height var(--transition-duration) var(--transition-easing),
				opacity var(--transition-duration) var(--transition-easing),
				padding var(--transition-duration) var(--transition-easing),
				gap var(--transition-duration) var(--transition-easing);
			display: grid;

			&[aria-hidden='true'] {
				max-height: 0;
				opacity: 0;
				gap: 0;
				padding: 0 0 0 1.25rem;
			}

			&[aria-hidden='false'] {
				max-height: 100px;
				opacity: 1;
				padding: 0.5625rem 0 0.5625rem 1.25rem;
				gap: 0.5rem;
			}
		}
	}
</style>
