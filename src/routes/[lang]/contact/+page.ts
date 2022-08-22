import { contactPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem } from '$stores/nav';

setNavItem('contacts');
nav.set(contactPageNavItems);
