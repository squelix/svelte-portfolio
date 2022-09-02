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
	@use 'lib/input' as input;

	label {
		@include input.label;
	}

	input {
		@include input.input;
	}
</style>
