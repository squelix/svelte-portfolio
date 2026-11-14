import { createContext } from 'svelte';
import { derived, writable } from 'svelte/store';

import type { PageNavItemInterface } from '#models/page-nav-item.interface.js';

/**
 * Nav values a universal load returns as data. Loads must never write module-level stores: on the
 * server those are shared by concurrent requests, and ISR would cache another page's nav for 1 h.
 */
export interface NavData {
	navItems?: PageNavItemInterface[];
	navItemSelected?: string;
	subnavItems?: PageNavItemInterface[];
	subNavItemSelected?: string;
	itemSelected?: string;
}

const createNavState = () => {
	const nav = writable<PageNavItemInterface[]>([]);
	const subnav = writable<PageNavItemInterface[]>([]);
	const navItemSelected = writable<string | undefined>(undefined);
	const navItemOpened = writable<string | undefined>(undefined);
	const subNavItemSelected = writable<string | undefined>(undefined);
	const subNavItemOpened = writable<string | undefined>(undefined);
	const itemSelected = writable<string | undefined>(undefined);

	let synced: NavData = {};

	/**
	 * Applies the nav values of the current page data. A field is only applied when its value
	 * changed, so a folder the user toggled stays as is while navigating inside the same section.
	 */
	const sync = (data: NavData): void => {
		if (data.navItems !== synced.navItems) nav.set(data.navItems ?? []);
		if (data.navItemSelected !== synced.navItemSelected) {
			navItemSelected.set(data.navItemSelected);
			navItemOpened.set(data.navItemSelected);
		}
		if (data.subnavItems !== synced.subnavItems) subnav.set(data.subnavItems ?? []);
		if (data.subNavItemSelected !== synced.subNavItemSelected) {
			subNavItemSelected.set(data.subNavItemSelected);
			subNavItemOpened.set(data.subNavItemSelected);
		}
		if (data.itemSelected !== synced.itemSelected) itemSelected.set(data.itemSelected);

		synced = {
			navItems: data.navItems,
			navItemSelected: data.navItemSelected,
			subnavItems: data.subnavItems,
			subNavItemSelected: data.subNavItemSelected,
			itemSelected: data.itemSelected
		};
	};

	return {
		sync,
		nav,
		subnav,
		navItemSelected,
		navItemOpened,
		subNavItemSelected,
		subNavItemOpened,
		itemSelected,
		aboutTitleItem: derived([navItemSelected, nav], ([$navItemSelected, $nav]) =>
			$nav.find((item) => $navItemSelected === item.id)
		),
		titleItem: derived([itemSelected, subnav], ([$itemSelected, $subnav]) =>
			$subnav.find((item) => $itemSelected === item.id)
		)
	};
};

export type NavState = ReturnType<typeof createNavState>;

const [getNavState, setNavStateContext] = createContext<NavState>();

export { getNavState };

/** Creates the nav state of one app instance (one SSR request, or the browser) and provides it. */
export const provideNavState = (): NavState => setNavStateContext(createNavState());
