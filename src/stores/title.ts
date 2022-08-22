/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { itemSelected, nav, navItemSelected, subnav, subNavItemSelected } from '$stores/nav';
import { derived } from 'svelte/store';

export const aboutTitleItem = derived(
	[navItemSelected, nav],
	([$navItemSelected, $nav]) => $nav.find((item) => $navItemSelected === item.id)!
);

export const aboutSubTitleItem = derived(
	[subNavItemSelected, subnav],
	([$subNavItemSelected, $subnav]) => $subnav.find((item) => $subNavItemSelected === item.id)!
);

export const titleItem = derived(
	[itemSelected, subnav],
	([$itemSelected, $subnav]) => $subnav.find((item) => $itemSelected === item.id)!
);
