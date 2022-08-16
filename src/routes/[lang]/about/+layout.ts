import { aboutPageNavItems } from '$lib/menu/nav';
import { nav } from '$stores/nav';
import { setItem } from '$stores/page-nav';

setItem('personal-info');
nav.set(aboutPageNavItems);
