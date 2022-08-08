<script lang="ts">
	import type { PageNavItemInterface } from '$models/page-nav-item.interface';
	import PageNavItem from './PageNavItem.svelte';

	export let ariaLabel: string;
	export let items: PageNavItemInterface[];
</script>

<nav class="nav" aria-label={ariaLabel}>
	<ul>
		{#each items as item}
			<PageNavItem {item} />
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
