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

export const setNavItems = (navId: string, items: PageNavItemInterface[]): void => {
	nav.update((navItems) =>
		navItems.map((navItem) => {
			if (navItem.id === navId) {
				return {
					...navItem,
					items: [...items]
				};
			}
			return navItem;
		})
	);
};

export const subNavItemSelected = writable<string | undefined>(undefined);
export const subNavItemOpened = writable<string | undefined>(undefined);

export const setSubNavItem = (item?: string): void => {
	subNavItemSelected.set(item);
	subNavItemOpened.set(item);
};

export const setSubNavItems = (subnavId: string, items: PageNavItemInterface[]): void => {
	subnav.update((subnavItems) =>
		subnavItems.map((subnavItem) => {
			if (subnavItem.id === subnavId) {
				return {
					...subnavItem,
					items: [...items]
				};
			}
			return subnavItem;
		})
	);
};

export const itemSelected = writable<string | undefined>(undefined);
