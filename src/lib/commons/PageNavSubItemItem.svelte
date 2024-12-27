<script lang="ts">
	import { page } from '$app/state';
	import Markdown from '$icons/markdown.svg?raw';
	import { getRoute, isRouteActive } from '$lib/routing';
	import Icon from '$lib/SvgIcon.svelte';
	import { locale, t } from '$translations';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	type Props = {
		item: PageNavItemInterface;
		ariaHidden: boolean;
	};

	let { item, ariaHidden }: Props = $props();
</script>

<li class="page-nav-sub-item-item">
	{#if item.link}
		<a
			class="page-nav-sub-item-item__link"
			class:page-nav-sub-item-item__link--active={isRouteActive(page.url.pathname, {
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
			<span class="page-nav-sub-item-item__link__icon">
				<Icon data={Markdown} width="100%" />
			</span>
			{#if item.labelKey && !item.label}
				{$t(item.labelKey)}
			{/if}
			{#if item.label && !item.labelKey}
				{item.label}
			{/if}
		</a>
	{:else if item.href}
		<a
			class="page-nav-sub-item-item__link"
			href={item.href}
			aria-label={item.ariaLabel?.key
				? item.ariaLabel.params
					? $t(item.ariaLabel.key, item.ariaLabel.params)
					: $t(item.ariaLabel.key)
				: undefined}
			aria-hidden={ariaHidden}
			tabindex={ariaHidden ? -1 : undefined}
		>
			<span class="page-nav-sub-item-item__link__icon">
				<Icon data={Markdown} width="100%" />
			</span>
			{#if item.labelKey && !item.label}
				{$t(item.labelKey)}
			{/if}
			{#if item.label && !item.labelKey}
				{item.label}
			{/if}
		</a>
	{:else}
		<p>
			{#if item.labelKey && !item.label}
				{$t(item.labelKey)}
			{/if}
			{#if item.label && !item.labelKey}
				{item.label}
			{/if}
		</p>
	{/if}
</li>

<style lang="scss">
	@use 'lib/mixins/link' as link;
	@use 'lib/mixins/font' as font;

	.page-nav-sub-item-item {
		@include font.fontWeight(400);

		& {
			font-size: 1rem;
			line-height: 1.3125;
		}

		&__link {
			@include link.link(var(--accent-1), 0, var(--secondary-4));

			&--active {
				@include link.linkSelected(var(--accent-1), 0, var(--secondary-4));

				& {
					color: var(--secondary-4);
				}
			}

			&__icon {
				display: inline-flex;
				width: 1.0137rem;
				height: 0.9125rem;
				color: #81a1c1;
			}
		}
	}
</style>
