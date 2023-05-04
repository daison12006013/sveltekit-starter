import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import route from './start/route.js'
// import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// pages: `build/${route.folder}`,
			// assets: `build/${route.folder}`,
			// fallback: null,
			// precompress: false
		}),
		csrf: false,

		files: {
			routes: `src/routes/${route.folder}`,
			hooks: {
				server: `src/hooks/${route.hooks}.ts`
			}
		},
		env: {
			dir: `src/routes/${route.folder}`
		}
	}
}

export default config
