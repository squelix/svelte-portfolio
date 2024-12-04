<script lang="ts">
	import PageNavFilterItem from '$lib/commons/PageNavFilterItem.svelte';

	import type { PageNavFilterItemInterface } from '$models/page-nav-filter-item.interface';

	type Props = {
		ariaLabel: string;
		items: PageNavFilterItemInterface[];
		selectedItems: string[];
		updateSelectedFilter: (filterId: string) => void;
	};

	let { ariaLabel, items, selectedItems, updateSelectedFilter }: Props = $props();
</script>

<nav class="page-nav-filter" aria-label={ariaLabel}>
	<ul class="page-nav-filter__list">
		{#each items as item (item.id)}
			<PageNavFilterItem {updateSelectedFilter} {item} {selectedItems} />
		{/each}
	</ul>
</nav>

<style lang="scss">
	@use 'lib/mixins/page-nav' as nav;

	.page-nav-filter {
		@include nav.page-nav;

		& {
			height: 100%;
			overflow: hidden;
		}

		&__list {
			height: 100%;
			overflow: hidden;
		}
	}
</style>
