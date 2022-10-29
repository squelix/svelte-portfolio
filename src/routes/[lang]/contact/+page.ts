/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-non-null-assertion */
import externalLinkSvg from '$icons/external-link.svg?raw';
import mailSvg from '$icons/mail.svg?raw';
import phoneSvg from '$icons/phone.svg?raw';
import { ContactPageNavItemEnum } from '$lib/menu/contact-page-nav-item.enum';
import { contactPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem, setNavItems } from '$stores/nav';
import { email, phone, socialNetworks } from '$stores/profile';
import { t } from '$translations';
import { get } from 'svelte/store';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	setNavItem(ContactPageNavItemEnum.Contacts);
	nav.set(contactPageNavItems);

	const emailValue = get(email);
	const phoneValue = get(phone);

	setNavItems(ContactPageNavItemEnum.Contacts, [
		{
			id: 'contacts-email',
			label: emailValue,
			icon: mailSvg,
			href: emailValue ? `mailto:${emailValue}` : undefined,
			ariaLabel: t.get('contact.aria.email')
		},
		{
			id: 'contacts-phone',
			label: phoneValue,
			icon: phoneSvg,
			href: phoneValue ? `tel:${phoneValue}` : undefined,
			ariaLabel: t.get('contact.aria.phone')
		}
	]);

	const socials = get(socialNetworks);
	setNavItems(
		ContactPageNavItemEnum.FindMeAlsoIn,
		socials?.map((item) => ({
			id: item.attributes!.title,
			label: item.attributes!.title,
			href: item.attributes!.url,
			icon: externalLinkSvg,
			ariaLabel: t.get('contact.aria.social', { social: item.attributes!.title } as never)
		})) ?? []
	);
	return {};
};
