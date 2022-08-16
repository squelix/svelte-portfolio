import { writable } from 'svelte/store';

import type { PageNavItemInterface } from '$models/page-nav-item.interface';

export const nav = writable<PageNavItemInterface[]>(undefined);
export const subnav = writable<PageNavItemInterface[]>(undefined);
