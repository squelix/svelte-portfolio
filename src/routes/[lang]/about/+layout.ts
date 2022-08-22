import { aboutPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem } from '$stores/nav';

setNavItem('personal-info');
nav.set(aboutPageNavItems);
