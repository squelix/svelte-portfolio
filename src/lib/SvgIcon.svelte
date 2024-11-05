<script lang="ts">
	/* eslint-disable no-useless-escape, @typescript-eslint/no-explicit-any */
	const extractViewBox = (svg: string): string => {
		const res = /view[bB]ox="([\d\- \.]+)"/.exec(svg);
		return !res ? '0 0 20 20' : res[1];
	};

	type Props = {
		data?: string;
		viewBox?: any;
		size?: string;
		width?: any;
		height?: string | undefined;
		color?: string;
		stroke?: string;
		fill?: any;
		[key: string]: any;
	};

	let {
		data = '',
		viewBox = extractViewBox(data),
		size = '20px',
		width = size,
		height = undefined,
		color = 'none',
		stroke = 'none',
		fill = color,
		...rest
	}: Props = $props();

	let elements = $derived(data?.replace(/<svg ([^>]*)>/, '').replace('</svg>', ''));
</script>

{#if elements}
	<svg xmlns="http://www.w3.org/2000/svg" {width} {height} {viewBox} {stroke} {fill} {...rest}>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html elements}
	</svg>
{/if}
