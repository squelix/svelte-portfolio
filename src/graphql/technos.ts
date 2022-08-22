import { gql } from '@apollo/client/core';

export const GET_TECHNOS_QUERY = gql`
	query getTechnos {
		technos {
			data {
				attributes {
					name
					slug
					color
				}
			}
		}
	}
`;
