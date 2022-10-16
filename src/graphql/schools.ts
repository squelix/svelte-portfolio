import { gql } from '@urql/core';

export const GET_SCHOOLS_QUERY = gql`
	query getSchools($locale: I18NLocaleCode) {
		schools(locale: $locale, sort: "startYear:desc", pagination: { page: 1, pageSize: 50 }) {
			data {
				attributes {
					diploma
					address
					startYear
					endYear
					slug
					schoolName
					picture {
						data {
							attributes {
								url
								name
							}
						}
					}
				}
			}
		}
	}
`;
