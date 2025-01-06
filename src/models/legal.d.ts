import { Document } from '@contentful/rich-text-types';

export type Legal = {
	title: string;
	slug: string;
	text: Document;
};
