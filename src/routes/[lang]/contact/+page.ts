/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-non-null-assertion */
import externalLinkSvg from '$icons/external-link.svg?raw';
import mailSvg from '$icons/mail.svg?raw';
import phoneSvg from '$icons/phone.svg?raw';
import { contactPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem, setNavItems } from '$stores/nav';
import { email, phone, socialNetworks } from '$stores/profile';
import { t } from '$translations';
import { get } from 'svelte/store';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	setNavItem('contacts');
	nav.set(contactPageNavItems);

	const emailValue = get(email);
	const phoneValue = get(phone);
	setNavItems('contacts', [
		{
			id: 'contacts-email',
			label: emailValue,
			icon: mailSvg,
			link: emailValue ? `mailto:${emailValue}` : undefined,
			ariaLabel: t.get('contact.aria.email')
		},
		{
			id: 'contacts-phone',
			label: phoneValue,
			icon: phoneSvg,
			link: phoneValue ? `tel:${phoneValue}` : undefined,
			ariaLabel: t.get('contact.aria.phone')
		}
	]);

	const socials = get(socialNetworks);
	setNavItems(
		'find-me-also-in',
		socials?.map((item) => ({
			id: item.attributes!.title,
			label: item.attributes!.title,
			link: item.attributes!.url,
			icon: externalLinkSvg,
			ariaLabel: t.get('contact.aria.social', { social: item.attributes!.title } as never)
		})) ?? []
	);
	return {};
};
