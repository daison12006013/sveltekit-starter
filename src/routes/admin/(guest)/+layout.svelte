<script lang="ts">
	import '$lib/tailwind.css'
	import { isDark } from '$stores/menus'
	import { browser } from '$app/environment'
	import HtmlHead from '../html_head.svelte'

	if (browser && localStorage.theme === 'dark') {
		isDark.update((v) => true)
	} else {
		isDark.update((v) => false)
	}
</script>

<HtmlHead {isDark} />

<slot />
