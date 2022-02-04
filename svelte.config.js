import preprocess from 'svelte-preprocess'
import { resolve } from 'path'
import adapter from '@sveltejs/adapter-vercel' // import adapter from '@sveltejs/adapter-auto';

let routeFolder = process.env.ROUTE_FOLDER

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
      allowed: ['PATCH', 'DELETE'],
    },

    files: {
      routes: `src/routes/${routeFolder}`,
    },
    vite: {
      resolve: {
        alias: {
          $src: resolve('./src'),
          $stores: resolve('./src/stores'),
          $assets: resolve('./src/assets'),
          $icon: resolve('./node_modules/svelte-bootstrap-icons/lib'),
        },
      },
    },
  },
}

export default config
