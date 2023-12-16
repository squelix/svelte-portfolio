import adapter from '@sveltejs/adapter-vercel';
import autoprefixer from 'autoprefixer';
import path from 'path';
import preprocess from 'svelte-preprocess';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer()]
		},
		scss: {
			sourceMap: true,
			includePaths: [path.resolve(__dirname, './src/styles')]
		}
	}),
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
			runtime: 'edge',
			regions: ['cdg1']
		})
	}
};

export default config;
