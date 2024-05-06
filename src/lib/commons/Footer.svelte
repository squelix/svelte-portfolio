<script lang="ts">
	import Behance from '$icons/behance.svg?raw';
	import Dribbble from '$icons/dribbble.svg?raw';
	import Github from '$icons/github.svg?raw';
	import Linkedin from '$icons/linkedin.svg?raw';
	import Malt from '$icons/malt.svg?raw';
	import Icon from '$lib/SvgIcon.svelte';
	import { github, linkedin, malt } from '$stores/profile';
	import { t } from '$translations';
</script>

<footer class="footer">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p class="footer__text">{@html $t('common.footer')}</p>

	<ul class="footer__socials">
		{#if $malt?.attributes?.url}
			<li class="footer__socials__item">
				<a
					class="footer__socials__item__link"
					href={$malt?.attributes?.url}
					target="_blank"
					rel="noreferrer noopener"
					aria-label={$t('common.aria.maltLabel')}
				>
					<Icon data={Malt} width="24px" />
				</a>
			</li>
		{/if}
		{#if $linkedin?.attributes?.url}
			<li class="footer__socials__item">
				<a
					class="footer__socials__item__link"
					href={$linkedin?.attributes?.url}
					target="_blank"
					rel="noreferrer noopener"
					aria-label={$t('common.aria.linkedinLabel')}
				>
					<Icon data={Linkedin} width="24px" />
				</a>
			</li>
		{/if}

		<li class="footer__socials__item footer__credit">
			<span class="footer__socials__item__link footer__credit__item">
				{$t('common.credits')}
				<a
					class="footer__credit__item__link"
					href="https://www.behance.net/darelova"
					target="_blank"
					rel="noreferrer noopener"
					aria-label={$t('common.aria.creditLabelBehance')}
				>
					<Icon data={Behance} width="24px" />
				</a>
				<a
					class="footer__credit__item__link"
					href="https://dribbble.com/YankaD"
					target="_blank"
					rel="noreferrer noopener"
					aria-label={$t('common.aria.creditLabelDribble')}
				>
					<Icon data={Dribbble} width="24px" />
				</a>
			</span>
		</li>

		{#if $github?.attributes?.url}
			<li class="footer__socials__item">
				<a
					class="footer__socials__item__link"
					href={$github?.attributes?.url}
					target="_blank"
					rel="noreferrer noopener"
					aria-label={$t('common.aria.githubLabel')}
				>
					<span class="footer__socials__item__link__text">@squelix</span>
					<Icon data={Github} width="24px" />
				</a>
			</li>
		{/if}
	</ul>
</footer>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;
	@use 'lib/mixins/font' as font;

	.footer {
		@include font.fontWeight(400);

		position: absolute;
		bottom: var(--mobile-main-padding);
		left: var(--mobile-main-padding);
		right: var(--mobile-main-padding);
		background-color: var(--primary-2);
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
			place-items: center;
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
					transition: color var(--transition-duration) var(--transition-easing);

					&:not(.footer__credit__item):hover {
						color: var(--secondary-4);
					}

					&__text {
						display: none;
					}
				}
			}
		}

		&__credit {
			display: none;

			&__item {
				gap: 0.625rem;

				&__link {
					transition: color var(--transition-duration) var(--transition-easing);

					&:hover {
						color: var(--secondary-4);
					}
				}
			}
		}

		@include br.desktop {
			bottom: calc(var(--desktop-main-padding) - 0.0625rem);
			left: calc(var(--desktop-main-padding) + 0.0625rem);
			right: calc(var(--desktop-main-padding) + 0.0625rem);
			grid-template-columns: 9.375rem minmax(0, 1fr);
			border-radius: 0 0 var(--border-radius) var(--border-radius);
			border-bottom: 1px solid var(--lines);

			&__socials {
				grid-template-columns: repeat(auto-fit, minmax(0, 3.0625rem));

				&__item {
					align-self: auto;

					&__link {
						display: flex;
						align-items: center;
						justify-content: center;
						width: fit-content;

						&__text {
							display: inline-flex;
							margin-right: 0.3125rem;
						}
					}

					&:nth-child(1) {
						grid-column: 1;
					}

					&:nth-child(2) {
						grid-column: 2;
					}

					&:nth-child(3) {
						grid-row: 1;
						grid-column: -1;
						width: calc(100% - 137px);
						justify-self: baseline;
						z-index: 1;
					}

					&:nth-child(4) {
						grid-row: 1;
						grid-column-start: -1;
						position: relative;

						&::after {
							content: '';
							position: absolute;
							width: 0.125rem;
							background-color: var(--lines);
							top: 0;
							bottom: 0;
							right: 8.4375rem;
						}

						.footer__socials__item__link {
							margin-right: 0;
						}
					}
				}
			}

			&__credit {
				display: list-item;

				&__item {
					gap: 0.625rem;

					&__link {
						transition: color var(--transition-duration) var(--transition-easing);

						&:hover {
							color: var(--secondary-4);
						}
					}
				}
			}
		}

		@media (1181px <=width <= 1280px) {
			left: calc(var(--desktop-main-padding) - 3.4375rem + 0.0625rem);
			right: calc(var(--desktop-main-padding) - 3.4375rem + 0.0625rem);
		}
	}
</style>
