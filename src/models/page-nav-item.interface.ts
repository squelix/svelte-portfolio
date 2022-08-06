import type { RoutesEnum } from '$lib/routing';

export interface PageNavItemInterface {
	id: string;
	label: string;
	link?: RoutesEnum;
	items?: PageNavItemInterface[];
}
