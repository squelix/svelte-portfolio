<script lang="ts">
	import { page } from '$app/state';
	import { provideNavState, type NavData } from '#stores/nav.js';

	type Props = {
		children?: import('svelte').Snippet;
	};

	let { children }: Props = $props();

	const navState = provideNavState();
	// Effects don't run during SSR, so seed the state synchronously, then follow client navigations.
	navState.sync(page.data as NavData);
	$effect.pre(() => {
		navState.sync(page.data as NavData);
	});
</script>

{@render children?.()}
