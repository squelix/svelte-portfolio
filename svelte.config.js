import adapter from '@sveltejs/adapter-vercel';
import path from 'path';
import preprocess from 'svelte-preprocess';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
			// split: true
			edge: true
		})
	}
};

export default config;
