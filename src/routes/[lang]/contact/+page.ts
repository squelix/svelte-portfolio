import { contactPageNavItems } from '$lib/menu/nav';
import { nav } from '$stores/nav';
import { setItem } from '$stores/page-nav';

setItem('contacts');
nav.set(contactPageNavItems);
