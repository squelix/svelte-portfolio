<script lang="ts">
	import FormattedTextDesktop from '$lib/commons/FormattedTextDesktop.svelte';
	import FormattedTextMobile from './FormattedTextMobile.svelte';

	export let lines: string[];
	export let mobileDisplayText: 'inline' | 'per-line' = 'inline';
</script>

{#if !!lines && lines.length > 0}
	<div class="content">
		<p class="content__text content__text--desktop display-only-desktop">
			<FormattedTextDesktop {lines} />
		</p>

		<p class="content__text content__text--mobile display-only-mobile">
			<FormattedTextMobile {lines} displayText={mobileDisplayText} />
		</p>
	</div>
{/if}

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

	.content {
		color: var(--secondary-1);
		padding: 1.0625rem 1.6875rem 0 1.6875rem;
		grid-column: 2/4;

		&__text {
			&--mobile {
				white-space: pre-line;
			}
		}

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
