<script lang="ts">
	import type { SvelteInputProps } from '$models/forms/svelte-html-props.interface';

	export let label: string;
	export let value: string;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends SvelteInputProps {
		label: string;
		value: string;
	}
</script>

<label>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `${label}&nbsp;:`}
	<input {...$$restProps} on:input bind:value />
</label>

<style lang="scss">
	@use 'lib/mixins/input' as input;

	label {
		@include input.label;
	}

	input {
		@include input.input;
	}
</style>
