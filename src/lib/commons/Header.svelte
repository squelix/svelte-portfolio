<script lang="ts">
	import Nav from '$lib/commons/Nav.svelte';

	import type { Profile } from '$models/profile';

	type Props = {
		profile: Profile;
	};

	let { profile }: Props = $props();
</script>

<header class="header">
	<p class="header__name">{profile.dashedName}</p>

	<Nav />
</header>

<style lang="scss">
	@use '$styles/lib/mixins/breakpoints' as br;
	@use '$styles/lib/mixins/font' as font;

	.header {
		position: relative;
		background-color: var(--primary-2);
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		border-right: 1px solid var(--lines);
		border-left: 1px solid var(--lines);
		border-top: 1px solid var(--lines);
		padding: 1.0625rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--nav-height);
		color: var(--secondary-1);

		&__name {
			@include font.fontWeight(400);

			& {
				font-size: 1rem;
				line-height: 1.3125;
			}
		}

		@include br.desktop {
			display: grid;
			grid-template-columns: minmax(0, 288px) minmax(0, 1fr);
			padding: 0 0 0 1.375rem;
		}
	}
</style>
