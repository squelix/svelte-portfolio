import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

import type { UserConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV === 'development';

const config: UserConfig = {
	plugins: [
		sveltekit({
			preprocess: vitePreprocess({ script: true, style: true }),
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
					'script-src': isDev
						? ['self', 'unsafe-inline', 'unsafe-eval', 'cloud.umami.is']
						: ['self', 'cloud.umami.is'],
					'connect-src': ['self', 'cloud.umami.is', 'gateway.umami.is'],
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
		})
	],
	resolve: {
		// Sass `@use` can't resolve `#` subpath imports, so styles keep a Vite alias
		alias: {
			$styles: path.join(__dirname, './src/styles')
		}
	},
	envPrefix: ['PUBLIC', 'VERCEL']
};

export default config;
