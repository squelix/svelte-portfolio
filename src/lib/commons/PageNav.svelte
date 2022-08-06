<script lang="ts">
	import type { PageNavItemInterface } from '$models/page-nav-item.interface';
	import PageNavItem from './PageNavItem.svelte';

	export let ariaLabel: string;
	export let items: PageNavItemInterface[];
</script>

<nav aria-label={ariaLabel}>
	<ul>
		{#each items as item}
			<PageNavItem {item} />
		{/each}
	</ul>
</nav>
