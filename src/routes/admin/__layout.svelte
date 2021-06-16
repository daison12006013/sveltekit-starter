<script lang="ts">
  import '$lib/tailwind.css'
  import { isSideMenuOpen, closeSideMenu } from '$stores/menus'
  import { clickOutside } from '$lib/IOEvents/click'
  import { keydownEscape } from '$lib/IOEvents/keydown'
  import SideBar from '$lib/Templates/Admin/SideBar.svelte'
  import Header from '$lib/Templates/Admin/Header.svelte'
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section id="body" class="dark">
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
      <Header />

      <slot />
    </div>
  </div>
</section>
