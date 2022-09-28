import mailSvg from '$icons/mail.svg?raw';
import phoneSvg from '$icons/phone.svg?raw';
import { contactPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem, setNavItems } from '$stores/nav';
import { email, phone } from '$stores/profile';
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
			link: emailValue ? `mailto:${emailValue}` : undefined
		},
		{
			id: 'contacts-phone',
			label: phoneValue,
			icon: phoneSvg,
			link: phoneValue ? `tel:${phoneValue}` : undefined
		}
	]);
	return {};
};
