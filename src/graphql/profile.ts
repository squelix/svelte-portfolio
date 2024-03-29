import { gql } from '@urql/core';

export const GET_PROFILE_QUERY = gql`
	query getProfile($locale: I18NLocaleCode) {
		profile(locale: $locale) {
			data {
				attributes {
					slug
					firstname
					lastname
					address
					email
					phone
					description
					job
					birthYear
					jobSearch
					picture {
						data {
							attributes {
								url
								name
							}
						}
					}
					cv {
						data {
							attributes {
								url
								name
							}
						}
					}
					socialNetworks(pagination: { page: 1, pageSize: 50 }) {
						data {
							attributes {
								title
								url
								icon {
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
			}
		}
	}
`;
