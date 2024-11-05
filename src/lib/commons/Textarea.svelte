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
	<textarea {...rest} bind:value></textarea>
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
