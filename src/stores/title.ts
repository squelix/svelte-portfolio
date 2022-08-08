/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { PageNavItemInterface } from '$models/page-nav-item.interface';
import { derived, writable } from 'svelte/store';

export const aboutTitle = writable<string | undefined>(undefined);

export const aboutTitleItem = (items: PageNavItemInterface[]) =>
	derived(aboutTitle, ($aboutTitle) => items.find((item) => $aboutTitle === item.id)!);
