<script lang="ts">
  import {
    isDark,
    isNotificationsMenuOpen,
    isProfileMenuOpen,
    isSideMenuOpen,
    toggleTheme,
    toggleSideMenu,
    toggleNotificationsMenu,
    toggleProfileMenu,
    closeNotificationsMenu,
    closeProfileMenu,
  } from '$stores/menus'
  import { clickOutside } from '$lib/IOEvents/click'
  import { keydownEscape } from '$lib/IOEvents/keydown'
  import List from '$icon/List/List.svelte'
  import X from '$icon/X/X.svelte'
</script>

<header class="py-4 shadow-md">
  <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 ">
    <!-- Mobile hamburger -->
    <button
      id="nav-mobile-hamburger"
      class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple text-white"
      on:click={toggleSideMenu}
      aria-label="Menu"
    >
      {#if $isSideMenuOpen}
        <X width="24" height="24" />
      {:else}
        <List width="24" height="24" />
      {/if}
    </button>
    <div class="hidden md:block w-full">
      <ul class="flex justify-end items-center flex-shrink-0 space-x-10 text-white">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/resume">Resumé</a>
        </li>
      </ul>
    </div>
  </div>
</header>
