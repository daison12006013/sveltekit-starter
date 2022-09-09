<script lang="ts">
	import '$lib/tailwind.css'
	import { isDark } from '$stores/menus'
	import { browser } from '$app/environment'

	if (browser && localStorage.theme === 'dark') {
		isDark.update((v) => true)
	} else {
		isDark.update((v) => false)
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
			localStorage.theme = 'dark'
		} else {
			document.documentElement.classList.remove('dark')
		}
	</script>
</svelte:head>

<slot />
