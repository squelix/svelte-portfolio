<script lang="ts">
	import { page } from '$app/stores';
	import Mardown from '$icons/markdown.svg?raw';
	import { getRoute, isRouteActive } from '$lib/routing';
	import Icon from '$lib/SvgIcon.svelte';
	import { locale, t } from '$translations';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	export let item: PageNavItemInterface;
</script>

<li class="page-nav-sub-item-item">
	{#if item.link}
		<a
			class="page-nav-sub-item-item__link"
			class:page-nav-sub-item-item__link--active={isRouteActive($page.url.pathname, {
				route: item.link,
				lang: $locale
			})}
			href={getRoute($locale, item.link)}
		>
			<span class="page-nav-sub-item-item__link__icon">
				<Icon data={Mardown} width="100%" />
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
	@use 'lib/link' as link;
	@use 'lib/font' as font;

	.page-nav-sub-item-item {
		@include font.fontWeight(400);

		font-size: 1rem;
		line-height: 1.3125;

		&__link {
			@include link.link(var(--accent-1), 0, var(--secondary-4));

			&--active {
				@include link.linkSelected(var(--accent-1), 0, var(--secondary-4));
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
