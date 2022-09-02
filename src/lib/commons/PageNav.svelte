<script lang="ts">
	import PageNavItem from '$lib/commons/PageNavItem.svelte';

	import type { PageNavItemInterface } from '$models/page-nav-item.interface';

	export let ariaLabel: string;
	export let items: PageNavItemInterface[];
</script>

<nav class="page-nav" aria-label={ariaLabel}>
	<ul>
		{#each items as item}
			<PageNavItem {item} />
		{/each}
	</ul>
</nav>

<style lang="scss">
	@use 'lib/mixins/page-nav' as nav;

	.page-nav {
		@include nav.page-nav;
	}
</style>
