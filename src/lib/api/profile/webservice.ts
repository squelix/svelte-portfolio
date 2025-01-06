/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Profile } from '$models/profile';
import slug from 'slug';
import ContentfulClient from '../contentful-client';
import { getPictureUrl } from '../utils';

export const getProfile = async (lang: string, fetch: typeof globalThis.fetch) => {
	const response = await ContentfulClient.getClient(fetch).getEntry('4Amqcmb9n2uwLwaOao1Zbw', {
		locale: lang
	});
	const name = `${response.fields.firstname} ${response.fields.lastname}`;

	return {
		...response.fields,
		slug: slug(name),
		name,
		dashedName:
			response.fields.firstname && response.fields.lastname
				? `${(response.fields.firstname as string).toLowerCase()}-${(response.fields.lastname as string).toLowerCase()}`
				: undefined,
		picture: getPictureUrl((response.fields.picture as any)?.fields.file.url),
		socialNetworks: ((response.fields.socialNetworks as any) ?? []).map((socialNetwork: any) => ({
			...socialNetwork.fields,
			slug: slug(socialNetwork.fields.title)
		})),
		biographyLines: (response.fields.description as string | undefined)?.split(/\r\n|\r|\n/) ?? [],
		jobSearchLines: (response.fields.jobSearch as string | undefined)?.split(/\r\n|\r|\n/) ?? []
	} as Profile;
};
