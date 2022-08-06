<script lang="ts">
	import Icon from '$lib/SvgIcon.svelte';
	import Burger from '$icons/burger.svg?raw';
	import Cross from '$icons/cross.svg?raw';
	import Facebook from '$icons/facebook.svg?raw';
	import Twitter from '$icons/twitter.svg?raw';
	import Github from '$icons/github.svg?raw';
	import NavItem from '$lib/commons/Nav-item.svelte';
	import { getRoute, MainRoutes, Routes } from '$lib/routing';
	import { t, locale } from '$translations';
	import { facebook, twitter, github } from '$stores/profile';

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
				link={getRoute($locale, routeKey)}
				last={index === Object.keys(Routes).length - 1}
				beforeLast={index === Object.keys(Routes).length - 2}
				on:closeMenu={() => (open = !open)}
			/>
		{/each}

		<li class="nav__footer">
			<p class="nav__footer__text">{@html $t('common.nav.footer')}</p>

			<ul class="nav__footer__socials">
				{#if $twitter?.attributes?.url}
					<li class="nav__footer__socials__item">
						<a
							class="nav__footer__socials__item__link"
							href={$twitter?.attributes?.url}
							target="_blank"
						>
							<Icon data={Twitter} width="24px" />
						</a>
					</li>
				{/if}
				{#if $facebook?.attributes?.url}
					<li class="nav__footer__socials__item">
						<a
							class="nav__footer__socials__item__link"
							href={$facebook?.attributes?.url}
							target="_blank"
						>
							<Icon data={Facebook} width="24px" />
						</a>
					</li>
				{/if}
				{#if $github?.attributes?.url}
					<li class="nav__footer__socials__item">
						<a
							class="nav__footer__socials__item__link"
							href={$github?.attributes?.url}
							target="_blank"
						>
							<Icon data={Github} width="24px" />
						</a>
					</li>
				{/if}
			</ul>
		</li>
	</ul>
</nav>

<style lang="scss">
	@use 'lib/breakpoints' as br;

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
				height: calc(100vh - (var(--mobile-main-padding) * 2) - var(--mobile-nav-height));
			}
		}

		&__footer {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.5;
			color: var(--secondary-1);
			height: 3.0625rem;
			border-top: 1px solid var(--lines);
			display: grid;
			align-items: center;
			grid-template-columns: repeat(2, minmax(0, 1fr));

			&__text {
				padding: 0.8125rem 0 0.9375rem 1.125rem;
				grid-column: 1;
			}

			&__socials {
				display: grid;
				align-items: center;
				justify-items: center;
				align-self: baseline;
				grid-template-columns: repeat(3, minmax(0, 1fr));
				grid-column: 2;

				&__item {
					width: 100%;
					align-self: baseline;
					padding: 0.75rem 0.875rem;
					border-left: 1px solid var(--lines);

					&__link {
						display: block;
						width: 1.5rem;
						height: 1.5rem;
						margin: auto;
					}
				}
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

			&__footer {
				display: none;
			}
		}
	}
</style>
