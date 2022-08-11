<script lang="ts">
	import Icon from '$lib/SvgIcon.svelte';
	import Close from '$icons/close.svg?raw';
	import { t } from '$translations';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	export let item: PageNavItemInterface;
	export let text: string;
</script>

<h1 class="title">
	<span class="display-only-mobile">{text}</span>
	<span class="display-only-desktop">{$t(item?.labelKey)}</span>

	<Icon class="display-only-desktop" data={Close} />
</h1>

<style lang="scss">
	@use 'lib/breakpoints' as br;
	@use 'lib/font' as font;

	.title {
		@include font.fontWeight(450);

		font-size: 0.875rem;
		line-height: 1.4;
		padding: 1.3125rem 0 1.8125rem 1.6875rem;

		@include br.desktop {
			@include font.fontWeight(400);

			padding: 0.625rem 0.75rem 0.625rem 0.875rem;
			grid-row: 1;
			grid-column: 2;
			font-size: 1rem;
			line-height: 1.3125;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 49px;
			color: var(--secondary-1);
			border-right: 1px solid var(--lines);
			border-bottom: 1px solid var(--lines);
		}
	}
</style>
