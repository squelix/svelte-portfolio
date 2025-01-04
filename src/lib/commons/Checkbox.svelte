<script lang="ts">
	import Check from '$icons/check.svg?raw';
	import Icon from '$lib/SvgIcon.svelte';
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	type Props = {
		checked: boolean;
		children?: import('svelte').Snippet;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	};

	let { checked = $bindable(), children, ...rest }: Props = $props();
</script>

<label class:disabled={rest.disabled} class:checked>
	<input type="checkbox" {...rest} bind:checked />
	<span>
		{#if checked}
			<span class="icon" transition:fade={{ duration: 175, easing: sineInOut }}>
				<Icon data={Check} />
			</span>
		{/if}
		{@render children?.()}
	</span>
</label>

<style lang="scss">
	@use '$styles/lib/mixins/breakpoints' as br;
	@use '$styles/lib/mixins/font' as font;

	input {
		--size: 18px;

		appearance: none;
		margin: 0;
		background-color: var(--primary-2);
		border: 1px solid var(--secondary-1);
		border-radius: 2px;
		width: var(--size);
		height: var(--size);
		cursor: pointer;
		transition:
			box-shadow var(--transition-duration) var(--transition-easing),
			background-color var(--transition-duration) var(--transition-easing);

		&:checked {
			background-color: var(--secondary-1);
		}
	}

	label {
		--size: 18px;

		min-height: 1.5rem;
		position: relative;
		display: grid;
		grid-template-columns: var(--size) minmax(0, 1fr);
		gap: 0.5em;
		align-items: center;
		cursor: pointer;

		&.disabled {
			opacity: 0.3;
			cursor: default;
		}

		&:not(.disabled) {
			&:focus,
			&:hover {
				input {
					box-shadow: 0 0 0 2px rgb(96 123 150 / 30%);
					border-radius: 2px;
				}
			}
		}
	}

	.icon {
		--size: 18px;

		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 0;
		top: 2px;
		width: var(--size);
		height: var(--size);
	}
</style>
