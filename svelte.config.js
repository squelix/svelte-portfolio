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
			$icons: path.join(__dirname, './src/icons')
		},
		adapter: adapter({
			runtime: 'nodejs22.x',
			regions: ['cdg1'],
			images: {
				formats: ['image/webp', 'image/avif'],
				minimumCacheTTL: 2678400, // 31 days
				remotePatterns: [
					{
						protocol: 'https',
						hostname: 'images.unsplash.com'
					},
					{
						protocol: 'https',
						hostname: 'images.ctfassets.net'
					},
					{
						protocol: 'https',
						hostname: 'picsum.photos'
					},
					{
						protocol: 'http',
						hostname: '127.0.0.1'
					},
					{
						protocol: 'http',
						hostname: 'localhost'
					},
					{
						protocol: 'https',
						hostname: 'res.cloudinary.com'
					},
					{
						protocol: 'https',
						hostname: 'storage.googleapis.com'
					}
				]
			}
		})
	}
};

export default config;
