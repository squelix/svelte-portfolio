/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { nav, subnav } from '$stores/nav';
import { itemSelected } from '$stores/page-nav';
import { itemSelected as subItemSelected } from '$stores/page-sub-nav';
import { derived } from 'svelte/store';

export const aboutTitleItem = derived(
	[itemSelected, nav],
	([$itemSelected, $nav]) => $nav.find((item) => $itemSelected === item.id)!
);

export const aboutSubTitleItem = derived(
	[subItemSelected, subnav],
	([$subItemSelected, $subnav]) => $subnav.find((item) => $subItemSelected === item.id)!
);
