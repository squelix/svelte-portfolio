<script lang="ts">
	import PageNavFilterItem from '$lib/commons/PageNavFilterItem.svelte';

	import type { PageNavFilterItemInterface } from '$models/page-nav-filter-item.interface';

	export let ariaLabel: string;
	export let items: PageNavFilterItemInterface[];
	export let selectedItems: string[];
</script>

<nav class="page-nav-filter" aria-label={ariaLabel}>
	<ul class="page-nav-filter__list">
		{#each items as item}
			<PageNavFilterItem on:updateSelectedFilter {item} {selectedItems} />
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
