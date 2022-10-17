import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { fileURLToPath } from 'url';

import type { UserConfig } from 'vite';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config: UserConfig = {
	plugins: [sveltekit()],
	envPrefix: ['PUBLIC', 'VERCEL'],
	resolve: {
		alias: {
			$styles: path.resolve(dirname, './src/styles'),
			$translations: path.resolve(dirname, './src/translations'),
			$models: path.resolve(dirname, './src/models'),
			$stores: path.resolve(dirname, './src/stores'),
			$graphql: path.resolve(dirname, './src/graphql'),
			$icons: path.resolve(dirname, './src/icons')
		}
	}
};

export default config;
