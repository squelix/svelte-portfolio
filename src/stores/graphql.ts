/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import { graphqlUri } from '$stores/env';
import { cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange } from '@urql/svelte';
import { get, readable } from 'svelte/store';

import type {
	Profile,
	ProfileEntity,
	ProfileEntityResponse,
	Project,
	ProjectEntity,
	ProjectEntityResponse,
	ProjectEntityResponseCollection,
	SchoolProjectEntityResponseCollection,
	SocialNetwork,
	SocialNetworkEntity,
	SocialNetworkRelationResponseCollection,
	Techno,
	TechnoEntity,
	TechnoEntityResponse,
	TechnoEntityResponseCollection,
	TechnoRelationResponseCollection
} from '$models/graphql-generated';
export const client = readable(
	createClient({
		url: get(graphqlUri),
		exchanges: [
			dedupExchange,
			cacheExchange({
				keys: {
					SocialNetwork: (item: any) => (item as SocialNetwork).slug,
					SocialNetworkEntity: (item: any) => (item as SocialNetworkEntity).attributes!.slug,
					SocialNetworkRelationResponseCollection: (item: any) =>
						(item as SocialNetworkRelationResponseCollection).data
							.map((item) => item.attributes!.slug)
							.join('-'),
					UploadFileEntityResponse: () => null,
					UploadFile: () => null,
					UploadFileEntity: () => null,
					Profile: (item: any) => (item as Profile).slug,
					ProfileEntity: (item: any) => (item as ProfileEntity).attributes!.slug,
					ProfileEntityResponse: (item: any) =>
						(item as ProfileEntityResponse).data!.attributes!.slug,
					Techno: (item: any) => (item as Techno).slug,
					TechnoEntity: (item: any) => (item as TechnoEntity).attributes!.slug,
					TechnoEntityResponse: (item: any) =>
						(item as TechnoEntityResponse).data!.attributes!.slug,
					TechnoEntityResponseCollection: (item: any) =>
						(item as TechnoEntityResponseCollection).data
							.map((item) => item.attributes!.slug)
							.join('-'),
					TechnoRelationResponseCollection: (item: any) =>
						(item as TechnoRelationResponseCollection).data
							.map((item) => item.attributes!.slug)
							.join('-'),
					Project: (item: any) => (item as Project).slug,
					ProjectEntity: (item: any) => (item as ProjectEntity).attributes!.slug,
					ProjectEntityResponse: (item: any) =>
						(item as ProjectEntityResponse).data!.attributes!.slug,
					ProjectEntityResponseCollection: (item: any) =>
						(item as ProjectEntityResponseCollection).data
							.map((item) => item.attributes!.slug)
							.join('-'),
					SchoolProjectEntityResponseCollection: (item: any) =>
						(item as SchoolProjectEntityResponseCollection).data
							.map((item) => item.attributes!.slug)
							.join('-')
				}
			}),
			fetchExchange
		]
	})
);
