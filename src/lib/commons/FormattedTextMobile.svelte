<script lang="ts">
	export let lines: string[];
	export let displayText: 'inline' | 'per-line' = 'inline';
</script>

{#if displayText === 'inline'}
	{@html lines.join(' ')}
{:else}
	{@html lines.join('\n')}
{/if}
