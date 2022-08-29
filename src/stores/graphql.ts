import { graphqlUri } from '$stores/env';
import { GraphQLClient } from 'graphql-request';
import { get, readable } from 'svelte/store';

export const client = readable(new GraphQLClient(get(graphqlUri)));
