import preprocess from 'svelte-preprocess'
import { resolve } from 'path'
import node from '@sveltejs/adapter-vercel'

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
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: node(),
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
