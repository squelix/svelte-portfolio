import { writable } from 'svelte/store';

import type { PageNavItemInterface } from '$models/page-nav-item.interface';

export const nav = writable<PageNavItemInterface[]>(undefined);
export const subnav = writable<PageNavItemInterface[]>(undefined);

export const navItemSelected = writable<string | undefined>(undefined);
export const navItemOpened = writable<string | undefined>(undefined);

export const setNavItem = (item?: string): void => {
	navItemSelected.set(item);
	navItemOpened.set(item);
};

export const subNavItemSelected = writable<string | undefined>(undefined);
export const subNavItemOpened = writable<string | undefined>(undefined);

export const setSubNavItem = (item?: string): void => {
	subNavItemSelected.set(item);
	subNavItemOpened.set(item);
};

export const itemSelected = writable<string | undefined>(undefined);
