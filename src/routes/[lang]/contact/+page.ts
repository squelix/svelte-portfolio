import externalLinkSvg from '$icons/external-link.svg?raw';
import mailSvg from '$icons/mail.svg?raw';
import phoneSvg from '$icons/phone.svg?raw';
import { ContactPageNavItemEnum } from '$lib/menu/contact-page-nav-item.enum';
import { contactPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem, setNavItems } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { profile } }) => {
	setNavItem(ContactPageNavItemEnum.Contacts);
	nav.set(contactPageNavItems);

	setNavItems(ContactPageNavItemEnum.Contacts, [
		{
			id: 'contacts-email',
			label: profile.email,
			icon: mailSvg,
			href: profile.email ? `mailto:${profile.email}` : undefined,
			ariaLabel: { key: 'contact.aria.email' }
		},
		{
			id: 'contacts-phone',
			label: profile.phone,
			icon: phoneSvg,
			href: profile.phone ? `tel:${profile.phone}` : undefined,
			ariaLabel: { key: 'contact.aria.phone' }
		}
	]);

	setNavItems(
		ContactPageNavItemEnum.FindMeAlsoIn,
		profile.socialNetworks?.map((item) => ({
			id: item.title,
			label: item.title,
			href: item.url,
			icon: externalLinkSvg,
			ariaLabel: {
				key: 'contact.aria.social',
				params: { social: item.title }
			}
		})) ?? []
	);
	return {};
};
