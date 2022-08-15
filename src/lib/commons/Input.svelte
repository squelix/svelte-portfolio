<script lang="ts">
	import type { SvelteInputProps } from '$models/forms/svelte-html-props.interface';

	export let label: string;
	export let value: string;

	interface $$Props extends SvelteInputProps {
		label: string;
		value: string;
	}
</script>

<label>
	{@html `${label}&nbsp;:`}
	<input {...$$restProps} on:input bind:value />
</label>

<style lang="scss">
	@use 'lib/breakpoints' as br;
	@use 'lib/font' as font;

	label {
		@include font.fontWeight(450);

		font-size: 1rem;
		line-height: 1.3125;
		color: var(--secondary-1);
	}

	input {
		display: block;
		width: 100%;
		background-color: var(--primary-3);
		border: 1px solid var(--secondary-1);
		border-radius: var(--border-radius);
		box-shadow: 0 0 0 2px transparent;
		transition: box-shadow var(--transition-duration) var(--transition-easing);
		margin-top: 0.625rem;
		padding: 0.625rem 0.9594rem;

		&:focus,
		&:hover {
			box-shadow: 0 0 0 2px rgb(96 123 150 / 0.3);
		}
	}
</style>
