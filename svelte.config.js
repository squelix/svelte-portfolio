import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: false,
		scss: {
			sourceMap: true,
			includePaths: [path.resolve(__dirname, './src/styles')]
		}
	}),
	kit: {
		inlineStyleThreshold: 1024,
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: true

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			// split: false
		}),
		vite: {
			resolve: {
				alias: {
					$styles: path.resolve(__dirname, './src/styles'),
					$translations: path.resolve(__dirname, './src/translations'),
					$models: path.resolve(__dirname, './src/models'),
					$stores: path.resolve(__dirname, './src/stores'),
					$graphql: path.resolve(__dirname, './src/graphql'),
					$icons: path.resolve(__dirname, './src/icons')
				}
			}
		}
	}
};

export default config;
