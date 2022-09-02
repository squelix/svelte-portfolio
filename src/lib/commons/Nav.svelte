<script lang="ts">
	import Burger from '$icons/burger.svg?raw';
	import Cross from '$icons/cross.svg?raw';
	import NavItem from '$lib/commons/Nav-item.svelte';
	import { MainRoutes } from '$lib/routing';
	import Icon from '$lib/SvgIcon.svelte';
	import { t } from '$translations';

	let open = false;
</script>

<nav class="nav">
	<button
		class="btn-clean nav__btn"
		aria-expanded={open}
		on:click={() => (open = !open)}
		aria-label="Ouvrir le menu de navigation"
	>
		<Icon data={open ? Cross : Burger} />
	</button>

	<ul class="nav__links" class:nav__links--visible={open}>
		{#each Object.keys(MainRoutes) as routeKey, index}
			<NavItem
				label={$t(`common.nav.${routeKey}`)}
				link={routeKey}
				last={index === Object.keys(MainRoutes).length - 1}
				beforeLast={index === Object.keys(MainRoutes).length - 2}
				on:closeMenu={() => (open = !open)}
			/>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

	.nav {
		&__links {
			position: absolute;
			margin: 0;
			overflow: hidden;
			height: 0;
			top: 55px;
			left: -1px;
			right: -1px;
			opacity: 0;
			background-color: var(--primary-2);
			border-radius: 0 0 var(--border-radius) var(--border-radius);
			border: 1px solid var(--lines);
			box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
			transition: height var(--transition-duration) var(--transition-easing),
				opacity var(--transition-duration) var(--transition-easing);
			z-index: 10;

			&--visible {
				opacity: 1;
				height: calc(100vh - (var(--mobile-main-padding) * 2) - var(--nav-height));
			}
		}

		@include br.desktop {
			flex: 1;

			&__btn {
				display: none;
			}

			&__links {
				position: relative;
				height: auto;
				z-index: 0;
				opacity: 1;
				top: auto;
				left: auto;
				right: auto;
				bottom: auto;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 0;
				border: none;
				box-shadow: none;
			}
		}
	}
</style>
