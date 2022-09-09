import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
// import adapter from '@sveltejs/adapter-vercel'

let routeFolder = process.env.ROUTE_FOLDER
let hooks = 'laravel-sanctum-fake-logged-in'

if (routeFolder === 'demo') {
	hooks = 'sveltekit-default'
}

if (routeFolder == undefined) {
	routeFolder = 'landing'
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE']
		},

		files: {
			routes: `src/routes/${routeFolder}`,
			hooks: `src/hooks/${hooks}.ts`
		}
	}
}

export default config
