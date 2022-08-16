import { educationNavItems } from '$lib/menu/nav';
import { subnav } from '$stores/nav';
import { setItem } from '$stores/page-sub-nav';

setItem('personal-info-education');
subnav.set(educationNavItems);
