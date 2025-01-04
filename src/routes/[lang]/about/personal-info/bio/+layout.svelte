<script lang="ts">
	import LayoutPage from '$lib/commons/LayoutPage.svelte';
	import { aboutTitleItem, titleItem } from '$stores/title';
	import { t } from '$translations';
	type Props = {
		children?: import('svelte').Snippet;
	};

	let { children }: Props = $props();
</script>

<LayoutPage>
	<h2 class="display-only-mobile title">
		{#if $aboutTitleItem?.labelKey && !$aboutTitleItem?.label}
			//&nbsp;{$t($aboutTitleItem.labelKey)}
		{/if}
		{#if !$aboutTitleItem?.labelKey && $aboutTitleItem?.label}
			//&nbsp;{$titleItem.label}
		{/if}

		<span class="title--gray">
			{#if $titleItem?.labelKey && !$titleItem?.label}
				/&nbsp;{$t($titleItem.labelKey)}
			{/if}
			{#if !$titleItem?.labelKey && $titleItem?.label}
				/&nbsp;{$titleItem.label}
			{/if}
		</span>
	</h2>

	{@render children?.()}
</LayoutPage>

<style lang="scss">
	@use '$styles/lib/mixins/font' as font;

	.title {
		@include font.fontWeight(450);

		& {
			padding: 2.375rem 1.6875rem 0;
			font-size: 1rem;
			line-height: 1.4;
		}

		&--gray {
			color: var(--secondary-1);
		}
	}
</style>
