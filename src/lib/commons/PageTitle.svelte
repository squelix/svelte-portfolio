<script lang="ts">
	import Close from '$icons/close.svg?raw';
	import Icon from '$lib/SvgIcon.svelte';

	export let textDesktop: string;
	export let textMobile: string;
</script>

<h1 class="title">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<span class="display-only-mobile">{@html textMobile}</span>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<span class="display-only-desktop">{@html textDesktop}</span>

	<Icon class="display-only-desktop" data={Close} />
</h1>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;
	@use 'lib/mixins/font' as font;

	.title {
		@include font.fontWeight(450);

		& {
			font-size: 0.875rem;
			line-height: 1.4;
			padding: 1.3125rem 0 1.8125rem 1.6875rem;
		}

		@include br.desktop {
			@include font.fontWeight(400);

			& {
				width: fit-content;
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
	}
</style>
