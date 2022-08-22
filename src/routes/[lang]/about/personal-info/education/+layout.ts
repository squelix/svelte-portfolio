import { educationNavItems } from '$lib/menu/nav';
import { setSubNavItem, subnav } from '$stores/nav';

setSubNavItem('personal-info-education');
subnav.set(educationNavItems);
