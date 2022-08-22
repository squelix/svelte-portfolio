import type { RoutesEnum } from '$lib/routing';

export interface PageNavItemInterface {
	id: string;
	labelKey?: string;
	label?: string;
	link?: RoutesEnum;
	items?: PageNavItemInterface[];
}
