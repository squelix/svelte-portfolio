<script lang="ts">
	type Props = {
		lines: string[];
		mustSplit?: boolean;
	};

	let { lines, mustSplit = true }: Props = $props();

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

<span class="count-line"></span>
<span>/**</span>
{#each lines as line, index (`${line}-${index}`)}
	<span class="count-line"></span>
	{#if mustSplit}
		<span class="content-line">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<span>&nbsp;* {@html firstParts(line, index)}</span>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<span>&nbsp:&nbsp{@html lastPart(line, index)}</span>
		</span>
	{:else}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<span>&nbsp;* {@html line}</span>
	{/if}
{/each}
<span class="count-line"></span>
<span>&nbsp;*/</span>

<style lang="scss">
	span {
		display: block;

		&.count-line {
			counter-increment: line;

			&::before {
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
