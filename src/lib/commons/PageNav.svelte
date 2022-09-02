<script lang="ts">
	import PageNavItem from '$lib/commons/PageNavItem.svelte';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

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

	ul {
		display: grid;
		gap: 0.1875rem;

		@include br.desktop {
			gap: 0;
		}
	}
</style>
