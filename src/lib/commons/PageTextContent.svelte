<script lang="ts">
	export let formattedDesktopText: string | undefined;
	export let formattedMobileText: string | undefined;
</script>

<div class="content">
	{#if !!formattedDesktopText}
		<p class="content__text content__text--desktop display-only-desktop">
			{@html formattedDesktopText}
		</p>
	{/if}

	{#if !!formattedMobileText}
		<p class="content__text content__text--mobile display-only-mobile">
			{@html formattedMobileText}
		</p>
	{/if}
</div>

<style lang="scss">
	@use 'lib/breakpoints' as br;

	.content {
		color: var(--secondary-1);
		padding: 1.0625rem 1.6875rem 0 1.6875rem;

		@include br.desktop {
			padding: 1.0625rem 2.375rem 0 2.375rem;

			&__text {
				&--desktop {
					margin: 0;
					counter-reset: line;
					display: grid;
					column-gap: 2.5rem;
					grid-template-columns: fit-content(100%) minmax(0, 1fr);
				}
			}
		}
	}
</style>
