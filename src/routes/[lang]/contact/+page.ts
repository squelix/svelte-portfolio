import externalLinkSvg from '#icons/external-link.svg?raw';
import mailSvg from '#icons/mail.svg?raw';
import phoneSvg from '#icons/phone.svg?raw';
import { ContactPageNavItemEnum } from '#lib/menu/contact-page-nav-item.enum.js';
import { contactPageNavItems } from '#lib/menu/nav.js';

import type { PageNavItemInterface } from '#models/page-nav-item.interface.js';
import type { NavData } from '#stores/nav.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }): Promise<NavData> => {
	const { profile } = await parent();

	const items: Partial<Record<ContactPageNavItemEnum, PageNavItemInterface[]>> = {
		[ContactPageNavItemEnum.Contacts]: [
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
		],
		[ContactPageNavItemEnum.FindMeAlsoIn]:
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
	};

	return {
		navItemSelected: ContactPageNavItemEnum.Contacts,
		navItems: contactPageNavItems.map((navItem) => ({
			...navItem,
			items: items[navItem.id as ContactPageNavItemEnum] ?? navItem.items
		}))
	};
};
