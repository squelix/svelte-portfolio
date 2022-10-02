<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-call */
	export let lines: string[];
	$: shouldDisplayGrid = lines.every((line) => line.includes(':'));
</script>

<span class="count-line" />
<span>/**</span>
{#each lines as line}
	<span class="count-line" />
	{#if shouldDisplayGrid}
		<span class="content-line">
			<span>&nbsp;* {line.split(':')[0]}</span>
			<span>&nbsp:&nbsp{line.split(':')[1]}</span>
		</span>
	{:else}
		<span>&nbsp;* {line}</span>
	{/if}
{/each}
<span class="count-line" />
<span>&nbsp;*/</span>

<style lang="scss">
	span {
		display: block;

		&.count-line {
			counter-increment: line;

			&:before {
				content: counter(line);
				user-select: none;
			}
		}

		&.content-line {
			display: grid;
			grid-template-columns: minmax(0, 0.5fr) minmax(0, 1fr);
		}
	}
</style>
