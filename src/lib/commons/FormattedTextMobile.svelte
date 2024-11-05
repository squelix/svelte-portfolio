<script lang="ts">
	type Props = {
		lines: string[];
		displayText?: 'inline' | 'per-line';
	};

	let { lines, displayText = 'inline' }: Props = $props();
</script>

{#if displayText === 'inline'}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html lines.join(' ')}
{:else}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html lines.join('\n')}
{/if}
