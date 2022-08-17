<script lang="ts">
	/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-floating-promises */
	import Input from '$lib/commons/Input.svelte';
	import { t } from '$translations';
	import { getRoute, RoutesEnum } from '$lib/routing';
	import { page } from '$app/stores';
	import { mailAccessToken, reCaptchaKey } from '$stores/env';
	import { mailService } from '$stores/services';
	import { onMount } from 'svelte';
	import { LangEnum } from '$models/langs.enum';
	import { locale } from '$translations';
	import Button from '$lib/commons/Button.svelte';
	import Textarea from '$lib/commons/Textarea.svelte';
	import PageNav from '$lib/commons/PageNav.svelte';
	import PageTitle from '$lib/commons/PageTitle.svelte';
	import BorderBottom from '$lib/commons/BorderBottom.svelte';
	import { nav } from '$stores/nav';
	import { validateEmail } from '$lib/validators';

	let intervalLoading: any;
	let intervalLoaded: any;
	let loaded = false;
	let token: string | undefined;

	let name = '';
	let email = '';
	let message = '';

	let errorMessage: string | undefined;
	let sending = false;

	onMount(() => {
		intervalLoading = setInterval(() => {
			if (!(window as any).grecaptcha?.render) {
				return;
			}
			loaded = true;
			clearInterval(intervalLoading);
		}, 100);

		intervalLoaded = setInterval(() => {
			if (!loaded) {
				return;
			}

			const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

			(window as any).grecaptcha.render('reCaptcha', {
				sitekey: $reCaptchaKey,
				theme,
				hl: $locale,
				callback: (t: any) => {
					token = t;
				}
			});

			clearInterval(intervalLoaded);
		});
	});

	const onSubmit = async () => {
		const finalEmail = email.trim();
		const finalMessage = message.trim();
		const finalName = name.trim();

		if (
			!finalEmail ||
			finalEmail.length === 0 ||
			!finalName ||
			finalName.length === 0 ||
			!finalMessage ||
			finalMessage.length === 0
		) {
			errorMessage = $t('contact.form.errors.fields');
			return;
		}

		if (!validateEmail(finalEmail)) {
			errorMessage = $t('contact.form.errors.email');
			return;
		}

		if (!token) {
			errorMessage = $t('contact.form.errors.captcha');
			return;
		}

		sending = true;

		$mailService
			.sendMail(finalEmail, finalMessage, finalName, token, $mailAccessToken)
			.then(() => {
				resetForm();
			})
			.finally(() => {
				sending = false;
			});
	};

	const resetForm = (): void => {
		name = '';
		email = '';
		message = '';
		errorMessage = undefined;
	};

	const clearErrorMessage = (): void => {
		if (!!errorMessage) {
			errorMessage = undefined;
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
	<link rel="canonical" href="{$page.url.origin}{getRoute($locale, RoutesEnum.Contact)}" />
	<link
		rel="alternate"
		hreflang="fr"
		href="{$page.url.origin}{getRoute(LangEnum.fr_FR, RoutesEnum.Contact)}"
	/>
	<link
		rel="alternate"
		hreflang="en"
		href="{$page.url.origin}{getRoute(LangEnum.en_GB, RoutesEnum.Contact)}"
	/>

	{#if !!$reCaptchaKey}
		<link rel="preconnect" href="https://www.google.com" />
		<link rel="preconnect" href="https://www.gstatic.com" crossorigin="anonymous" />
		<script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
	{/if}
</svelte:head>

<PageTitle textDesktop={$t('contact.nav.0')} textMobile={$t('contact.title')} />

<BorderBottom />

<PageNav ariaLabel={$t('contact.aria.nav')} items={$nav} />

<form on:submit|preventDefault={onSubmit}>
	<Input
		label={`_${$t('contact.form.name')}`}
		disabled={sending}
		bind:value={name}
		on:input={clearErrorMessage}
	/>
	<Input
		label={`_${$t('contact.form.email')}`}
		disabled={sending}
		bind:value={email}
		on:input={clearErrorMessage}
	/>
	<Textarea
		label={`_${$t('contact.form.message')}`}
		rows={6}
		disabled={sending}
		bind:value={message}
		on:input={clearErrorMessage}
	/>

	<div id="reCaptcha" class="reCaptcha" class:reCaptcha--disabled={sending} />

	{#if !!errorMessage}
		<p class="error">{errorMessage}</p>
	{/if}

	<Button type="submit" disabled={sending} isLoading={sending}>
		{$t('contact.form.submit')}
	</Button>
</form>

<style lang="scss">
	@use 'lib/breakpoints' as br;
	@use 'lib/font' as font;

	form {
		height: fit-content;
		display: grid;
		grid-column: 2;
		grid-row: 2/3;
		gap: 1.125rem;
		padding: 2.625rem 1.6875rem 0 1.6875rem;

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

	.loader {
		opacity: 1;
	}
</style>
