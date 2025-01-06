<script lang="ts">
	import Project from '$lib/commons/Project.svelte';

	import type { Project as ProjectType } from '$models/project';
	import type { SchoolProject } from '$models/school-project';

	type Props = {
		projects: (ProjectType | SchoolProject)[];
		baseTrad: string;
	};

	let { projects, baseTrad }: Props = $props();
</script>

<ul class="list">
	{#each projects as project, index (project.slug)}
		{#if project}
			<Project {project} {index} {baseTrad} />
		{/if}
	{/each}
</ul>

<style lang="scss">
	@use '$styles/lib/mixins/breakpoints' as br;

	.list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
		grid-auto-rows: minmax(min-content, max-content);
		gap: 1.25rem;
		padding: 0 1.6875rem;
		margin-top: 1.0625rem;

		@include br.desktop {
			grid-template-columns: repeat(auto-fit, minmax(0, 23.1469rem));
			padding: 1.0625rem 2.375rem 0;
			justify-content: space-around;
		}
	}
</style>
