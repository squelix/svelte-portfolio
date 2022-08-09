/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { PageNavItemInterface } from '$models/page-nav-item.interface';
import { itemSelected } from '$stores/page-nav';
import { itemSelected as subItemSelected } from '$stores/page-sub-nav';
import { derived } from 'svelte/store';

export const aboutTitleItem = (items: PageNavItemInterface[]) =>
	derived(itemSelected, ($itemSelected) => items.find((item) => $itemSelected === item.id)!);

export const aboutSubTitleItem = (items: PageNavItemInterface[]) =>
	derived(
		subItemSelected,
		($subItemSelected) => items.find((item) => $subItemSelected === item.id)!
	);
