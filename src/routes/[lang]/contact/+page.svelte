<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/state';
	import { PUBLIC_RE_CAPTCHA_KEY } from '$env/static/public';
	import BorderBottom from '$lib/commons/BorderBottom.svelte';
	import Button from '$lib/commons/Button.svelte';
	import Input from '$lib/commons/Input.svelte';
	import PageNav from '$lib/commons/PageNav.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';
	import Textarea from '$lib/commons/Textarea.svelte';
	import { RoutesEnum, getRoute } from '$lib/routing';
	import { ENTER_KEY } from '$lib/utils/keys';
	import { validateEmail } from '$lib/validators';
	import { LangEnum } from '$models/langs.enum';
	import { nav } from '$stores/nav';
	import { locale, t } from '$translations';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	const transitionMs = 175;

	let intervalLoading: number;
	let intervalLoaded: number;
	let loaded = false;
	let token: string | undefined;

	let name = $state('');
	let email = $state('');
	let message = $state('');

	let errorMessage: string | undefined = $state();
	let sending = $state(false);

	let showConfirmMessage = $state(false);
	let showForm = $state(true);

	onMount(() => {
		intervalLoading = window.setInterval(() => {
			if (!window.grecaptcha?.render) {
				return;
			}
			loaded = true;
			window.clearInterval(intervalLoading);
		}, 100);

		intervalLoaded = window.setInterval(() => {
			if (!loaded) {
				return;
			}

			const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

			window.grecaptcha.render('reCaptcha', {
				sitekey: PUBLIC_RE_CAPTCHA_KEY,
				theme,
				hl: $locale,
				callback: (t: string) => {
					token = t;
				}
			});

			window.clearInterval(intervalLoaded);
		});
	});

	const submitEnhancer: SubmitFunction = ({ formData, cancel }) => {
		const finalEmail = (formData.get('email') as string | null)?.trim();
		const finalMessage = (formData.get('message') as string | null)?.trim();
		const finalName = (formData.get('name') as string | null)?.trim();

		if (
			!finalEmail ||
			finalEmail.length === 0 ||
			!finalName ||
			finalName.length === 0 ||
			!finalMessage ||
			finalMessage.length === 0
		) {
			cancel();
			errorMessage = $t('contact.form.errors.fields') as string;
			return;
		}

		if (!validateEmail(finalEmail)) {
			cancel();
			errorMessage = $t('contact.form.errors.email') as string;
			return;
		}

		if (!token) {
			cancel();
			errorMessage = $t('contact.form.errors.captcha') as string;
			return;
		}

		sending = true;

		return async ({ result }) => {
			if (result.type === 'success') {
				resetForm();
			}
			sending = false;
			showForm = false;

			setTimeout(() => {
				showConfirmMessage = true;
			}, transitionMs);
			await applyAction(result);
		};
	};

	const resetForm = (): void => {
		name = '';
		email = '';
		message = '';
		errorMessage = undefined;
	};

	const clearErrorMessage = (): void => {
		if (errorMessage) {
			errorMessage = undefined;
		}
	};

	const hideConfirmMessage = (): void => {
		showConfirmMessage = false;
		setTimeout(() => {
			showForm = true;
		}, transitionMs);
	};

	const keydown = ({ code }: KeyboardEvent): void => {
		if (code === ENTER_KEY) {
			hideConfirmMessage();
		}
	};
</script>

<svelte:head>
	<title>{$t('contact.page.title')}</title>
	<meta name="description" content={$t('contact.page.description')} />
	<meta property="og:title" content={$t('contact.page.title')} />
	<meta property="og:description" content={$t('contact.page.description')} />
	<meta name="twitter:title" content={$t('contact.page.title')} />
	<meta name="twitter:description" content={$t('contact.page.description')} />
	<link rel="canonical" href="{page.url.origin}{getRoute($locale, RoutesEnum.Contact)}" />
	<link
		rel="alternate"
		hreflang="fr"
		href="{page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.Contact)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.Contact)}"
	/>

	{#if PUBLIC_RE_CAPTCHA_KEY}
		<link rel="preconnect" href="https://www.google.com" />
		<link rel="preconnect" href="https://www.gstatic.com" crossorigin="anonymous" />
		<script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
	{/if}
</svelte:head>

<PageTitle textDesktop={$t('contact.nav.0')} textMobile={$t('contact.title')} />

<BorderBottom />

<PageNav ariaLabel={$t('contact.aria.nav')} items={$nav} />

{#if showConfirmMessage}
	<section class="confirm" transition:fade={{ duration: transitionMs, easing: sineInOut }}>
		<p class="confirm__thank-you">{$t('contact.confirm.thankYou')}</p>
		<p class="confirm__message">{$t('contact.confirm.message')}</p>
		<Button type="button" class="confirm__button" onclick={hideConfirmMessage} onkeydown={keydown}
			>{$t('contact.confirm.button')}</Button
		>
	</section>
{/if}

{#if showForm}
	<form
		transition:fade={{ duration: transitionMs, easing: sineInOut }}
		method="POST"
		use:enhance={submitEnhancer}
	>
		<Input
			label={`_${$t('contact.form.name')}`}
			disabled={sending}
			autofocus
			bind:value={name}
			oninput={clearErrorMessage}
			name="name"
		/>
		<Input
			label={`_${$t('contact.form.email')}`}
			disabled={sending}
			bind:value={email}
			oninput={clearErrorMessage}
			name="email"
		/>
		<Textarea
			label={`_${$t('contact.form.message')}`}
			rows={6}
			disabled={sending}
			bind:value={message}
			oninput={clearErrorMessage}
			name="message"
		/>

		<div id="reCaptcha" class="reCaptcha" class:reCaptcha--disabled={sending}></div>

		{#if !!errorMessage}
			<p class="error">{errorMessage}</p>
		{/if}

		<Button type="submit" disabled={sending} isLoading={sending}>
			{$t('contact.form.submit')}
		</Button>
	</form>
{/if}

<style lang="scss">
	/* stylelint-disable no-duplicate-selectors */
	@use 'lib/mixins/breakpoints' as br;
	@use 'lib/mixins/font' as font;

	form {
		height: fit-content;
		display: grid;
		grid-column: 2;
		grid-row: 2/3;
		gap: 1.125rem;
		padding: 2.625rem 1.6875rem 0;

		@include br.desktop {
			width: 28rem;
		}
	}

	.reCaptcha {
		&--disabled {
			opacity: 0.3;
			pointer-events: none;
			cursor: default;
		}
	}

	.error {
		color: var(--accent-3);
	}

	.confirm {
		padding: 0 1.875rem;
		margin-top: 2.625rem;
		text-align: center;

		&__thank-you {
			@include font.fontWeight(450);

			& {
				font-style: normal;
				font-size: 1.5rem;
				line-height: 1.2917;
				margin-bottom: 0.8125rem;
			}
		}

		&__message {
			@include font.fontWeight(450);

			& {
				font-style: normal;
				font-size: 1.125rem;
				line-height: 1.3333;
				color: var(--secondary-1);
				margin-bottom: 1.3125rem;
			}
		}

		@include br.desktop {
			margin: 2.625rem 1.6875rem 0;
			padding: 0;
			max-width: 23.875rem;
		}
	}
</style>
