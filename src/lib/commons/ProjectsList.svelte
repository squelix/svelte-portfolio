<script lang="ts">
	import Project from '$lib/commons/Project.svelte';

	import type { Project as ProjectType, SchoolProject } from '$models/graphql-generated';

	export let projects: (Omit<ProjectType, '__typename'> | Omit<SchoolProject, '__typename'>)[];
	export let baseTrad: string;
</script>

<ul class="list">
	{#each projects as project, index}
		{#if project}
			<Project {project} {index} {baseTrad} />
		{/if}
	{/each}
</ul>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

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
