<script lang="ts">
	/* eslint-disable no-useless-escape */
	const extractViewBox = (svg: string): string => {
		const res = /view[bB]ox="([\d\- \.]+)"/.exec(svg);
		return !res ? '0 0 20 20' : res[1];
	};

	export let data = '';
	export let viewBox = extractViewBox(data);

	export let size = '20px';
	export let width = size;
	export let height: string | undefined = undefined;

	export let color = 'none';
	export let stroke = 'none';
	export let fill = color;

	$: elements = data?.replace(/<svg ([^>]*)>/, '').replace('</svg>', '');
</script>

{#if elements}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		{width}
		{height}
		{viewBox}
		{stroke}
		{fill}
		{...$$restProps}
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html elements}
	</svg>
{/if}
