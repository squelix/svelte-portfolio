import { writable } from 'svelte/store';

export const itemSelected = writable<string | undefined>(undefined);
