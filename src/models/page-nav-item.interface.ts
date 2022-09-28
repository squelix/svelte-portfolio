export interface PageNavItemInterface {
	id: string;
	labelKey?: string;
	label?: string;
	link?: string;
	icon?: string;
	ariaLabel?: string;
	items?: PageNavItemInterface[];
}
