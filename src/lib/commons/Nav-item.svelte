<script lang="ts">
	import { page } from '$app/state';
	import { isBaseRouteActive } from '$lib/routing';
	import { ENTER_KEY } from '$lib/utils/keys';
	import { locale } from '$translations';

	type Props = {
		label: string;
		link: string;
		route: string | undefined;
		last: boolean;
		beforeLast: boolean;
		closeMenu: () => void;
	};

	let { label, link, route, last, beforeLast, closeMenu }: Props = $props();

	const keydown = ({ code }: KeyboardEvent): void => {
		if (code === ENTER_KEY) {
			closeMenu();
		}
	};
</script>

<li class="item" class:item--last={last} class:item--before-last={beforeLast}>
	<a
		class="item__link"
		href={`/${$locale}${route ?? ''}`}
		onclick={closeMenu}
		onkeydown={keydown}
		class:item__link--selected={isBaseRouteActive(page.url.pathname, {
			lang: $locale,
			route: link
		})}>{label}</a
	>
</li>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;
	@use 'lib/mixins/link' as link;

	.item {
		&__link {
			display: block;
			padding: 1.0625rem;
			border-bottom: 1px solid var(--lines);
			color: var(--secondary-4);

			@include link.link(var(--accent-1), 0, var(--secondary-4));

			&--selected {
				@include link.linkSelected(var(--accent-1), 0, var(--secondary-4));
			}

			&:focus {
				outline-offset: -10px;
			}
		}

		@include br.desktop {
			&__link {
				border-bottom: none;
				border-left: 1px solid var(--lines);
				padding: calc(1.0625rem - 2px) 1.9375rem;
			}

			&--before-last & {
				&__link {
					border-right: 1px solid var(--lines);
				}
			}

			&--last {
				margin-left: auto;

				.item__link {
					padding: calc(1.0625rem - 2px) 1.375rem;
				}
			}
		}
	}
</style>
