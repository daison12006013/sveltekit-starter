import preprocess from 'svelte-preprocess'
import { resolve } from 'path'
import adapter from '@sveltejs/adapter-auto'
// import adapter from '@sveltejs/adapter-vercel'

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
      allowed: ['PUT', 'PATCH', 'DELETE'],
    },

    files: {
      routes: `src/routes/${routeFolder}`,
      hooks: `src/hooks/laravel-sanctum-fake-logged-in.ts`,
    },

    vite: {
      // server: {
      //   hmr: {
      //     port: 3000,
      //     clientPort: 3000,
      //   }
      // },
      resolve: {
        alias: {
          $src: resolve('./src'),
          $lib: resolve('./src/lib'),
          $stores: resolve('./src/stores'),
          $assets: resolve('./src/assets'),
          $icon: resolve('./node_modules/svelte-bootstrap-icons/lib'),
        },
      },
    },
  },
}

export default config
