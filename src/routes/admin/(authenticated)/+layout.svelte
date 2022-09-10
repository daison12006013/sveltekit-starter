<script lang="ts">
	import '$lib/tailwind.css'
	import { isDark, isSideMenuOpen, closeSideMenu } from '$stores/menus'
	import { clickOutside } from '$lib/ioevents/click'
	import { keydownEscape } from '$lib/ioevents/keydown'
	import SideBar from '$lib/templates/Admin/SideBar.svelte'
	import Header from '$lib/templates/Admin/Header.svelte'
	import { browser } from '$app/environment'

	if (browser && localStorage.theme === 'dark') {
		isDark.update((v) => true)
	} else {
		isDark.update((v) => false)
	}

	export let data: any
	const user = data.user
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

<section id="body">
	<div class="flex h-screen bg-gray-50 dark:bg-gray-900" class:overflow-hidden={$isSideMenuOpen}>
		<!-- Desktop sidebar -->
		<aside
			class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
		>
			<SideBar />
		</aside>

		<!-- Mobile sidebar -->
		<!-- Backdrop -->
		{#if $isSideMenuOpen}
			<div
				class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
			/>
			<aside
				class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
				use:clickOutside={['nav-mobile-hamburger']}
				on:click-outside={closeSideMenu}
				use:keydownEscape
				on:keydown-escape={closeSideMenu}
			>
				<SideBar />
			</aside>
		{/if}

		<div class="flex flex-col flex-1 w-full">
			<Header {user} />

			<slot />
		</div>
	</div>
</section>
