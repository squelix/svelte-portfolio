<script lang="ts">
	import type { SvelteTextAreaProps } from '$models/forms/svelte-html-props.interface';

	export let label: string;
	export let value: string;

	interface $$Props extends SvelteTextAreaProps {
		label: string;
		value: string;
	}
</script>

<label>
	{@html `${label}&nbsp;:`}
	<textarea {...$$restProps} on:input bind:value />
</label>

<style lang="scss">
	@use 'lib/mixins/input' as input;

	label {
		@include input.label;
	}

	textarea {
		@include input.input;
	}
</style>
