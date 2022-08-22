import { bioNavItems } from '$lib/menu/nav';
import { setSubNavItem, subnav } from '$stores/nav';

setSubNavItem('personal-info-bio');
subnav.set(bioNavItems);
