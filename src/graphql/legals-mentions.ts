import { gql } from '@urql/core';

export const GET_LEGALS_MENTIONS_QUERY = gql`
	query getLegalMention($locale: I18NLocaleCode) {
		legalMention(locale: $locale) {
			data {
				attributes {
					text
				}
			}
		}
	}
`;
