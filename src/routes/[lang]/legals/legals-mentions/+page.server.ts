import { client } from '$stores/graphql';

import { GET_LEGALS_MENTIONS_QUERY } from '$graphql/legals-mentions';
import type {
	GetLegalMentionQuery,
	GetLegalMentionQueryVariables
} from '$models/graphql-generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	let legalsMentions: GetLegalMentionQuery | undefined = undefined;

	try {
		const { data } = await client
			.query<GetLegalMentionQuery, GetLegalMentionQueryVariables>(
				GET_LEGALS_MENTIONS_QUERY,
				{
					locale: lang
				},
				{ fetch }
			)
			.toPromise();

		legalsMentions = data;
	} catch (error) {
		console.error(error);
	}

	return { route, lang, legalsMentions };
};
