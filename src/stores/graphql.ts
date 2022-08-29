import { graphqlUri } from '$stores/env';
import { createClient } from '@urql/svelte';
import { get, readable } from 'svelte/store';

export const client = readable(createClient({ url: get(graphqlUri) }));
