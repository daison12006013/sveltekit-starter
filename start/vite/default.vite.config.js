import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	resolve: {
		alias: {
			$src: resolve('./src'),
			$stores: resolve('./src/stores'),
			$assets: resolve('./src/assets'),
			$icon: resolve('./node_modules/svelte-bootstrap-icons/lib')
		}
	}
}

export default config
