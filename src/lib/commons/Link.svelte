<script lang="ts">
	type Props = {
		style?: 'primary' | 'default' | 'ghost';
		href: string;
		children?: import('svelte').Snippet;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	};

	let { style = 'default', href, children, ...rest }: Props = $props();
</script>

<a
	{...rest}
	class:primary={style === 'primary'}
	class:default={style === 'default'}
	class:ghost={style === 'ghost'}
	{href}
>
	{@render children?.()}
</a>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;
	@use 'lib/mixins/font' as font;

	a {
		@include font.fontWeight(450);

		& {
			border: none;
			text-align: center;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			cursor: pointer;
			appearance: none;
			outline: inherit;
			padding: 0.625rem 0.875rem;
			font-size: 0.875rem;
			line-height: 1.2857;
			width: fit-content;
			border-radius: var(--border-radius);
			transition:
				background-color var(--transition-duration) var(--transition-easing),
				color var(--transition-duration) var(--transition-easing),
				border-color var(--transition-duration) var(--transition-easing),
				width var(--transition-duration) var(--transition-easing);
		}

		&:disabled {
			cursor: default;
			opacity: 0.7;
		}
	}

	.primary {
		background-color: var(--accent-1);
		color: var(--primary-1);

		&:not(:disabled) {
			&:focus,
			&:hover {
				background-color: #ffac6b;
			}
		}
	}

	.default {
		background-color: #1c2b3a;
		color: var(--secondary-4);

		&:not(:disabled) {
			&:focus,
			&:hover {
				background-color: #263b50;
			}
		}
	}

	.ghost {
		border: 1px solid var(--secondary-4);
		background-color: transparent;
		color: var(--secondary-4);

		&:not(:disabled) {
			&:focus,
			&:hover {
				border-color: rgb(255 255 255 / 70%);
			}
		}
	}
</style>
