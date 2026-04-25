import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ script: true, style: true }),
	kit: {
		alias: {
			$styles: path.join(__dirname, './src/styles'),
			$translations: path.join(__dirname, './src/translations'),
			$models: path.join(__dirname, './src/models'),
			$stores: path.join(__dirname, './src/stores'),
			$icons: path.join(__dirname, './src/icons')
		},
		adapter: adapter({
			runtime: 'nodejs24.x',
			regions: ['cdg1'],
			images: {
				sizes: [32, 48, 64, 96, 128, 256, 384],
				formats: ['image/webp', 'image/avif'],
				minimumCacheTTL: 2678400, // 31 days
				remotePatterns: [
					{
						protocol: 'https',
						hostname: 'images.ctfassets.net'
					},
					{
						protocol: 'https',
						hostname: 'res.cloudinary.com'
					}
				]
			}
		}),
		csp: {
			directives: {
				'default-src': ['self'],
				'script-src': isDev ? ['self', 'unsafe-inline', 'unsafe-eval'] : ['self', 'unsafe-inline'],
				'style-src': ['self', 'unsafe-inline'],
				'img-src': ['self', 'blob:', 'data:', 'images.ctfassets.net', 'res.cloudinary.com'],
				'font-src': ['self'],
				'object-src': ['self'],
				'base-uri': ['self'],
				'form-action': ['self'],
				'frame-ancestors': ['none'],
				'upgrade-insecure-requests': true
			}
		}
	}
};

export default config;
