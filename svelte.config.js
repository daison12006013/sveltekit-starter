import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
// import adapter from '@sveltejs/adapter-vercel'

// ---------------------------------------------------------
// SvelteKit Starter: here we determine based on the ./make
// runtime, where we're passing the ROUTE_FOLDER as the
// input.
// ---------------------------------------------------------

let routeFolder = process.env.ROUTE_FOLDER
let hooks = 'sveltekit-default'

switch (routeFolder) {
	case 'admin':
	case 'admin-in':
		routeFolder = 'admin'
		hooks = 'laravel-sanctum-fake-logged-in'
		break

	case 'admin-out':
		routeFolder = 'admin'
		hooks = 'laravel-sanctum-fake-logged-out'
		break

	case undefined:
		routeFolder = 'demo'
		hooks = 'sveltekit-default'
		break
}

// ---------------------------------------------------------

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		files: {
			routes: `src/routes/${routeFolder}`,
			hooks: {
				server: `src/hooks/${hooks}.ts`
			}
		}
	}
}

export default config
