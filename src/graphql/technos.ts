import { gql } from '@apollo/client/core/index.js';

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
