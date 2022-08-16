import { bioNavItems } from '$lib/menu/nav';
import { subnav } from '$stores/nav';
import { setItem } from '$stores/page-sub-nav';

setItem('personal-info-bio');
subnav.set(bioNavItems);
