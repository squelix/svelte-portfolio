<script lang="ts">
	type Props = {
		label: string;
		value: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	};

	let { label, value = $bindable(), ...rest }: Props = $props();
</script>

<label>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `${label}&nbsp;:`}
	<input {...rest} bind:value />
</label>

<style lang="scss">
	@use '$styles/lib/mixins/input' as input;

	label {
		@include input.label;
	}

	input {
		@include input.input;
	}
</style>
