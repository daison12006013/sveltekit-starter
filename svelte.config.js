import route from './start/route.js'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
// import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		files: {
			routes: `src/routes/${route.folder}`,
			hooks: {
				server: `src/hooks/${route.hooks}.ts`
			}
		}
	}
}

export default config
