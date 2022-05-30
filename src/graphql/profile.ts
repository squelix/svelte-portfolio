import { gql } from '@apollo/client/core';

export const GET_PROFILE_QUERY = gql`
	query getProfile($locale: I18NLocaleCode!) {
		profile(locale: $locale) {
			data {
				attributes {
					firstname
					lastname
					address
					email
					phone
					description
					job
					birthYear
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
					socialNetworks {
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
