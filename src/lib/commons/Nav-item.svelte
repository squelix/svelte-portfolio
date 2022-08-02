<script lang="ts">
	export let label: string;
	export let link: string;
	export let last: boolean;
	export let beforeLast: boolean;
</script>

<li class="item" class:item--last={last} class:item--before-last={beforeLast}>
	<a class="item__link" href={link}>{label}</a>
</li>

<style lang="scss">
	@use 'lib/breakpoints' as br;
	@use 'lib/link' as link;

	.item {
		&__link {
			display: block;
			padding: 1.0625rem;
			border-bottom: 1px solid var(--lines);
			color: var(--secondary-4);

			@include link.link(var(--secondary-4), 0);

			&--selected {
				@include link.linkSelected(var(--secondary-4), 0);
			}
		}

		@include br.desktop {
			&__link {
				border-bottom: none;
				border-left: 1px solid var(--lines);
				padding: calc(1.0625rem - 2px) 1.9375rem;
			}

			&--before-last & {
				&__link {
					border-right: 1px solid var(--lines);
				}
			}

			&--last {
				margin-left: auto;

				.item__link {
					padding: calc(1.0625rem - 2px) 1.375rem calc(1.0625rem - 2px) 1.375rem;
				}
			}
		}
	}
</style>
