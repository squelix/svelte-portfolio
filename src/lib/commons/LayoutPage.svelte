<section class="page-content">
	<slot />
</section>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

	.page-content {
		grid-row: 2;
		grid-column: 2/4;

		@include br.desktop {
			overflow: auto;
			scrollbar-color: var(--secondary-1) var(--primary-2);
			scrollbar-width: 10px;
			padding-bottom: 48px;

			&::-webkit-scrollbar {
				width: 10px;
				height: 7px;
				background-color: var(--primary-2);
				border-left: 1px solid var(--lines);
			}

			&::-webkit-scrollbar-thumb {
				background-color: var(--secondary-1);
			}
		}
	}
</style>
