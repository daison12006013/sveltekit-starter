import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

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
}

export default config
