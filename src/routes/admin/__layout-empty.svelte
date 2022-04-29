<script context="module">
	export async function load({ session, url }) {
    const isLoginPage = url.pathname.indexOf(import.meta.env.VITE_LOGIN_PATH) >= 0

		if (!session?.user && !isLoginPage) {
			return {
				status: 302,
				redirect: import.meta.env.VITE_LOGIN_PATH,
			};
		} else if (session?.user && isLoginPage) {
      return {
				status: 302,
				redirect: '/',
			};
    }

		return {
			props: {
				user: session.user,
			},
		};
	}
</script>

<script lang="ts">
  import '$lib/tailwind.css'
  import { isDark } from '$stores/menus'
  import { browser } from '$app/env'

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
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
    }
  </script>
</svelte:head>

<slot />
