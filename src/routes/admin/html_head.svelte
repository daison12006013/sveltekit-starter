<script lang="ts">
	export let isDark
</script>

<svelte:head>
	<meta name="theme-color" content={$isDark ? '#1a1c23' : '#FFF'} />

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
