import { gql } from '@urql/core';

export const GET_LANGUAGES_QUERY = gql`
	query getLanguages($locale: I18NLocaleCode) {
		languages(locale: $locale, sort: "percentage:desc", pagination: { page: 1, pageSize: 50 }) {
			data {
				attributes {
					name
					percentage
					slug
				}
			}
		}
	}
`;
