<script lang="ts">
	import FormattedTextDesktop from '$lib/commons/FormattedTextDesktop.svelte';
	import FormattedTextMobile from './FormattedTextMobile.svelte';

	type Props = {
		lines: string[];
		mobileDisplayText?: 'inline' | 'per-line';
		mustSplit?: boolean;
	};

	let { lines, mobileDisplayText = 'inline', mustSplit = true }: Props = $props();
</script>

{#if !!lines && lines.length > 0}
	<div class="content">
		<p class="content__text content__text--desktop display-only-desktop">
			<FormattedTextDesktop {lines} {mustSplit} />
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
		padding: 1.0625rem;
		grid-column: 2/4;

		&__text {
			&--mobile {
				white-space: pre-line;
			}
		}

		@include br.desktop {
			overflow-y: auto;
			padding: 1.0625rem 2.375rem;

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
