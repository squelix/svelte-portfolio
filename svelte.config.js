import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ script: true, style: true }),
	kit: {
		alias: {
			$styles: path.join(__dirname, './src/styles'),
			$translations: path.join(__dirname, './src/translations'),
			$models: path.join(__dirname, './src/models'),
			$stores: path.join(__dirname, './src/stores'),
			$graphql: path.join(__dirname, './src/graphql'),
			$icons: path.join(__dirname, './src/icons')
		},
		inlineStyleThreshold: 1024,
		adapter: adapter({
			external: ['@sendgrid/mail'],
			runtime: 'edge',
			regions: ['cdg1']
		})
	}
};

export default config;
