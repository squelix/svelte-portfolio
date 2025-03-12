<script lang="ts">
	import Behance from '$icons/behance.svg?raw';
	import Burger from '$icons/burger.svg?raw';
	import Cross from '$icons/cross.svg?raw';
	import Dribbble from '$icons/dribbble.svg?raw';
	import NavItem from '$lib/commons/Nav-item.svelte';
	import { MainRoutes } from '$lib/routing';
	import Icon from '$lib/SvgIcon.svelte';
	import { ENTER_KEY } from '$lib/utils/keys';
	import { t } from '$translations';

	import type { RoutesEnum } from '$lib/routing';

	let open = $state(false);

	const mainRoutesKeys: RoutesEnum[] = Object.keys(MainRoutes) as RoutesEnum[];

	const toggleClose = (): void => {
		open = !open;
	};

	const keydown = ({ code }: KeyboardEvent): void => {
		if (code === ENTER_KEY) {
			toggleClose();
		}
	};
</script>

<nav class="nav">
	<button
		class="btn-clean nav__btn"
		aria-expanded={open}
		onclick={toggleClose}
		onkeydown={keydown}
		aria-label="Ouvrir le menu de navigation"
	>
		<Icon data={open ? Cross : Burger} />
	</button>

	<ul class="nav__links" class:nav__links--visible={open}>
		{#each mainRoutesKeys as routeKey, index (routeKey)}
			<NavItem
				label={$t(`common.nav.${routeKey}`)}
				link={routeKey}
				route={MainRoutes[routeKey]}
				last={index === Object.keys(MainRoutes).length - 1}
				beforeLast={index === Object.keys(MainRoutes).length - 2}
				closeMenu={() => (open = !open)}
			/>
		{/each}

		<li class="nav__credit">
			{$t('common.credits')}
			<a
				href="https://www.behance.net/darelova"
				target="_blank"
				rel="noreferrer noopener"
				aria-label={$t('common.aria.creditLabelBehance')}
			>
				<Icon data={Behance} width="24px" />
			</a>
			<a
				href="https://dribbble.com/YankaD"
				target="_blank"
				rel="noreferrer noopener"
				aria-label={$t('common.aria.creditLabelDribble')}
			>
				<Icon data={Dribbble} width="24px" />
			</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	@use '$styles/lib/mixins/breakpoints' as br;

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
			transition:
				height var(--transition-duration) var(--transition-easing),
				opacity var(--transition-duration) var(--transition-easing);
			z-index: 10;

			&--visible {
				opacity: 1;
				height: calc(100vh - (var(--mobile-main-padding) * 2) - var(--nav-height));
			}
		}

		&__credit {
			position: absolute;
			min-height: 59px;
			bottom: 0;
			display: flex;
			gap: 0.625rem;
			left: 0;
			right: 0;
			align-items: center;
			padding: 1.0625rem;
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
				inset: auto;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 0;
				border: none;
				box-shadow: none;
			}

			&__credit {
				display: none;
			}
		}
	}
</style>
