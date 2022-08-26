<script lang="ts">
	import PageNavFilterItem from '$lib/commons/PageNavFilterItem.svelte';

	import type { PageNavFilterItemInterface } from '$models/page-nav-filter-item.interface';

	export let ariaLabel: string;
	export let items: PageNavFilterItemInterface[];
	export let selectedItems: string[];
</script>

<nav class="nav" aria-label={ariaLabel}>
	<ul>
		{#each items as item}
			<PageNavFilterItem on:updateSelectedFilter {item} {selectedItems} />
		{/each}
	</ul>
</nav>

<style lang="scss">
	@use 'lib/breakpoints' as br;

	.nav {
		@include br.desktop {
			grid-column: 1;
			grid-row: 1/3;
			border-right: 1px solid var(--lines);
		}
	}
</style>
