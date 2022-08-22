<script lang="ts">
	import { aboutTitleItem, titleItem } from '$stores/title';
	import { t } from '$translations';
</script>

<section class="page-content">
	<h2 class="display-only-mobile title">
		{#if $aboutTitleItem?.labelKey && !$aboutTitleItem?.label}
			//&nbsp;{$t($aboutTitleItem.labelKey)}
		{/if}
		{#if !$aboutTitleItem?.labelKey && $aboutTitleItem?.label}
			//&nbsp;{$t($aboutTitleItem?.label)}
		{/if}

		{#if $titleItem?.labelKey && !$titleItem?.label}
			<span class="title--gray">/&nbsp;{$t($titleItem.labelKey)}</span>
		{/if}
		{#if !$titleItem?.labelKey && $titleItem?.label}
			<span class="title--gray">/&nbsp;{$t($titleItem?.label)}</span>
		{/if}
	</h2>

	<slot />
</section>

<style lang="scss">
	@use 'lib/font' as font;

	.title {
		@include font.fontWeight(450);

		padding: 2.375rem 1.6875rem 0 1.6875rem;
		font-size: 1rem;
		line-height: 1.4;

		&--gray {
			color: var(--secondary-1);
		}
	}
</style>
