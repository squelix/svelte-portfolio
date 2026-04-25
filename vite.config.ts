import { sveltekit } from '@sveltejs/kit/vite';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	envPrefix: ['PUBLIC', 'VERCEL']
};

export default config;
