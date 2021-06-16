<script lang="ts">
  import { isSideMenuOpen, toggleSideMenu } from '$stores/menus'
  import List from '$icon/List/List.svelte'
  import X from '$icon/X/X.svelte'
  import links from './Config/links.json'
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
        {#each links as link, i}
          <li>
            <a href={link.url}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</header>
