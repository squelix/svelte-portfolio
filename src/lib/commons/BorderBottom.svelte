<span class="border-bottom"></span>

<style lang="scss">
	@use '$styles/lib/mixins/breakpoints' as br;

	.border-bottom {
		display: none;

		@include br.desktop {
			display: block;
			grid-column: 2/4;
			grid-row: 1;
			border-bottom: 1px solid var(--lines);
		}
	}
</style>
