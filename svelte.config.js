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
			edge: true
		}),
		prerender: {
			entries: [
				'/',
				'/fr',
				'/en',
				'/en/contact',
				'/en/projects',
				'/en/about',
				'/en/about/personal-info',
				'/en/about/personal-info/bio',
				'/en/about/personal-info/bio/looking-for',
				'/en/about/personal-info/education',
				'/en/about/personal-info/education/schools',
				'/en/about/personal-info/education/projects',
				'/fr/contact',
				'/fr/projects',
				'/fr/about',
				'/fr/about/personal-info',
				'/fr/about/personal-info/bio',
				'/fr/about/personal-info/bio/looking-for',
				'/fr/about/personal-info/education',
				'/fr/about/personal-info/education/schools',
				'/fr/about/personal-info/education/projects'
			],
			onError: 'continue'
		}
	}
};

export default config;
