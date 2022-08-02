<script lang="ts">
	import { dashedName } from '$stores/profile';
	import Nav from '$lib/commons/Nav.svelte';
</script>

<header class="header">
	<p class="header__name">{$dashedName}</p>

	<Nav />
</header>

<style lang="scss">
	@use 'lib/breakpoints' as br;

	.header {
		position: relative;
		background-color: var(--primary-2);
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		border-right: 1px solid var(--lines);
		border-left: 1px solid var(--lines);
		border-top: 1px solid var(--lines);
		padding: 1.0625rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--mobile-nav-height);
		color: var(--secondary-1);

		&__name {
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.3125;
		}

		@include br.desktop {
			padding: 1.0625rem 0 1.0625rem 1.375rem;
			justify-content: flex-start;
			gap: 9.625rem;
		}
	}
</style>
