<script lang="ts">
	import { facebook, twitter, github } from '$stores/profile';
	import Icon from '$lib/SvgIcon.svelte';
	import Facebook from '$icons/facebook.svg?raw';
	import Twitter from '$icons/twitter.svg?raw';
	import Github from '$icons/github.svg?raw';
	import { t } from '$translations';
</script>

<footer class="footer">
	<p class="footer__text">{@html $t('common.footer')}</p>

	<ul class="footer__socials">
		{#if $twitter?.attributes?.url}
			<li class="footer__socials__item">
				<a class="footer__socials__item__link" href={$twitter?.attributes?.url} target="_blank">
					<Icon data={Twitter} width="24px" />
				</a>
			</li>
		{/if}
		{#if $facebook?.attributes?.url}
			<li class="footer__socials__item">
				<a class="footer__socials__item__link" href={$facebook?.attributes?.url} target="_blank">
					<Icon data={Facebook} width="24px" />
				</a>
			</li>
		{/if}
		{#if $github?.attributes?.url}
			<li class="footer__socials__item">
				<a class="footer__socials__item__link" href={$github?.attributes?.url} target="_blank">
					<span class="footer__socials__item__link__text">@squelix</span>
					<Icon data={Github} width="24px" />
				</a>
			</li>
		{/if}
	</ul>
</footer>

<style lang="scss">
	@use 'lib/breakpoints' as br;

	.footer {
		position: absolute;
		bottom: var(--mobile-main-padding);
		left: var(--mobile-main-padding);
		right: var(--mobile-main-padding);
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

					&__text {
						display: none;
					}
				}
			}
		}

		@include br.desktop {
			bottom: var(--desktop-main-padding);
			left: var(--desktop-main-padding);
			right: var(--desktop-main-padding);
			grid-template-columns: 9.375rem minmax(0, 1fr);

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
		}
	}
</style>