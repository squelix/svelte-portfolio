<script lang="ts">
	export let lines: string[];
	export let displayText: 'inline' | 'per-line' = 'inline';
</script>

{#if displayText === 'inline'}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html lines.join(' ')}
{:else}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html lines.join('\n')}
{/if}
