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
      svg: [],
    },
    {
      name: 'Resumé',
      url: '/resume',
      svg: [],
    },
  ]
</script>

<div class="py-4 text-white">
  <ul class="mt-6">
    {#each links as link, a}
      <li class="relative px-6 py-3">
        {#if activeMenu == link.url}
          <span
            class="absolute inset-y-0 left-0 w-1 bg-red-300 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          />
        {/if}

        <a
          class="{activeMenu == link.url &&
            'text-red-300'} inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href={link.url}
          on:click={(e) => {
            e.preventDefault()
            changeUrl(link.url)
          }}
        >
          {#if link.svg}
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {#each link.svg as s, b}
                <path d={s} />
              {/each}
            </svg>
          {/if}
          <span class="ml-4">{link.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>
