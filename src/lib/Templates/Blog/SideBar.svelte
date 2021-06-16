<script lang="ts">
  import { closeSideMenu, pageMenus, togglePageMenu } from '$stores/menus'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  const changeUrl = (url: string) => {
    closeSideMenu()
    goto(url)
  }

  let activeMenu = $page.path

  $: if ($page.path) {
    activeMenu = $page.path
  }

  export let links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Resumé',
      url: '/resume',
    },
  ]
</script>

<div class="py-4 text-white">
  <ul class="mt-6">
    {#each links as link, a}
      <li class="relative px-6 py-3">
        {#if activeMenu == link.url}
          <span
            class="absolute inset-y-0 left-0 w-2 bg-red-500 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          />
        {/if}

        <a
          class="{activeMenu == link.url &&
            'text-red-200'} inline-flex items-center w-full text-3xl font-semibold transition-colors duration-150 hover:text-red-500"
          href={link.url}
          on:click={(e) => {
            e.preventDefault()
            changeUrl(link.url)
          }}
        >
          <span class="ml-4 mt-4">{link.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>
