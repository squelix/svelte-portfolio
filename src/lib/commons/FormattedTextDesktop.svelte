<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-call */
	export let lines: string[];
	export let mustSplit = true;

	let splittedLines: string[][] = [];

	const getSplittedLines = (line: string, index: number): string[] => {
		if (!splittedLines[index]) {
			splittedLines[index] = line.split(':');
		}
		return splittedLines[index];
	};

	const lastPart = (line: string, index: number): string => {
		const splitted = getSplittedLines(line, index);
		return splitted[splitted.length - 1];
	};

	const firstParts = (line: string, index: number): string => {
		const splitted = getSplittedLines(line, index);
		return splitted.slice(0, splitted.length - 1).join(':');
	};
</script>

<span class="count-line" />
<span>/**</span>
{#each lines as line, index}
	<span class="count-line" />
	{#if mustSplit}
		<span class="content-line">
			<span>&nbsp;* {@html firstParts(line, index)}</span>
			<span>&nbsp:&nbsp{@html lastPart(line, index)}</span>
		</span>
	{:else}
		<span>&nbsp;* {@html line}</span>
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
