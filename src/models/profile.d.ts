export type SocialNetwork = {
	slug: string;
	title: string;
	url: string;
};

export type Profile = {
	slug: string;
	firstname: string;
	lastname: string;
	name: string;
	dashedName: string;
	address: string;
	email: string;
	phone: string;
	description: string;
	job: string;
	birthYear: number;
	jobSearch: string;
	biographyLines: string[];
	jobSearchLines: string[];
	picture: string;
	socialNetworks: SocialNetwork[];
};
