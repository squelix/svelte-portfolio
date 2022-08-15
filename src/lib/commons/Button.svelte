<script lang="ts">
	import type { SvelteButtonProps } from '$models/forms/svelte-html-props.interface';

	export let style: 'primary' | 'default' | 'ghost' = 'default';

	interface $$Props extends SvelteButtonProps {
		style?: 'primary' | 'default' | 'ghost';
	}
</script>

<button
	{...$$restProps}
	class:primary={style === 'primary'}
	class:default={style === 'default'}
	class:ghost={style === 'ghost'}
	on:click><slot /></button
>

<style lang="scss">
	@use 'lib/breakpoints' as br;
	@use 'lib/font' as font;

	button {
		@include font.fontWeight(450);

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
		transition: background-color var(--transition-duration) var(--transition-easing),
			color var(--transition-duration) var(--transition-easing),
			border-color var(--transition-duration) var(--transition-easing);
	}

	.primary {
		background-color: var(--accent-1);
		color: var(--primary-1);

		&:hover {
			background-color: #ffac6b;
		}
	}

	.default {
		background-color: #1c2b3a;
		color: var(--secondary-4);

		&:hover {
			background-color: #263b50;
		}
	}

	.ghost {
		border: 1px solid var(--secondary-4);
		background-color: transparent;
		color: var(--secondary-4);

		&:hover {
			border-color: rgb(255 255 255/ 0.7);
		}
	}
</style>
