import { gql } from '@apollo/client/core';

export const GET_SCHOOLS_QUERY = gql`
	query getSchools($locale: I18NLocaleCode!) {
		schools(locale: $locale) {
			data {
				attributes {
					diploma
					address
					startYear
					endYear
					name
					slug
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
