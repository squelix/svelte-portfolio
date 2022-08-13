import { writable } from 'svelte/store';

export const itemSelected = writable<string | undefined>(undefined);
export const itemOpened = writable<string | undefined>(undefined);

export const setItem = (item?: string): void => {
	itemSelected.set(item);
	itemOpened.set(item);
};
