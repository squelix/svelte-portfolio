<script lang="ts">
	import Icon from '$lib/SvgIcon.svelte';
	import Mardown from '$icons/markdown.svg?raw';
	import { getRoute, isRouteActive } from '$lib/routing';
	import { locale } from '$translations';
	import { page } from '$app/stores';

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
			{item.label}
		</a>
	{:else}
		<p>
			{item.label}
		</p>
	{/if}
</li>

<style lang="scss">
	@use 'lib/link' as link;

	.page-nav-sub-item-item {
		font-weight: normal;
		font-size: 1rem;
		line-height: 1.3125;

		&__link {
			@include link.link(var(--accent-1), 0, white);

			&--active {
				@include link.linkSelected(var(--accent-1), 0, white);
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
