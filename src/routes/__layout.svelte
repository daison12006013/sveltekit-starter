<script lang="ts">
  import '../tailwind.css'
  import { isSideMenuOpen, closeSideMenu } from '$stores/menus'
  import { clickOutside } from '$lib/IOEvents/clickOutside'
  import { keydownEscape } from '$lib/IOEvents/keydownEscape'
  import SideBar from '$lib/Components/Admin/SideBar.svelte'
  import Header from '$lib/Components/Admin/Header.svelte'
</script>

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
        use:clickOutside
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
