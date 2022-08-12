<script lang="ts" context="module">
	import { itemSelected } from '$stores/page-sub-nav';

	itemSelected.set('personal-info-bio');
</script>

<script lang="ts">
	import { aboutSubTitleItem, aboutTitleItem } from '$stores/title';
	import { pageNavItems, personalInfoNavItems } from '$lib/menu/nav';
	import { t } from '$translations';

	const item = aboutTitleItem(pageNavItems);
	const subItem = aboutSubTitleItem(personalInfoNavItems);
</script>

<section class="page-content">
	<h2 class="display-only-mobile title">
		// {$t($item.labelKey)} <span class="title--gray">/ {$t($subItem.labelKey)}</span>
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
