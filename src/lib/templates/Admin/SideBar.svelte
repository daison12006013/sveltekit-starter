<script lang="ts">
  import { closeSideMenu, pageMenus, togglePageMenu } from '$stores/menus'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  const changeUrl = (url: string) => {
    closeSideMenu()
    goto(url)
  }

  let activeMenu = $page.url

  $: if ($page.url) {
    activeMenu = $page.url
  }

  export let withTitle = true
  export let links = [
    {
      name: 'Dashboard',
      url: '/',
      svg: [
        'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      ],
    },
    {
      name: 'Forms',
      url: '/forms',
      svg: [
        'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      ],
    },
    {
      name: 'Cards',
      url: '/cards',
      svg: [
        'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      svg: [
        'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
        'M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
      ],
    },
    {
      name: 'Buttons',
      url: '/buttons',
      svg: [
        'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
      ],
    },
    {
      name: 'Modals',
      url: '/modals',
      svg: [
        'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
      ],
    },
    { name: 'Tables', url: '/tables', svg: ['M4 6h16M4 10h16M4 14h16M4 18h16'] },
    {
      name: 'Pages',
      svg: [
        'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      ],
      sublinks: [
        { name: 'Login', url: '/pages/login' },
        { name: 'Create account', url: '/pages/create-account' },
        { name: 'Forgot password', url: '/pages/forgot-password' },
        { name: '404', url: '/this-page-does-not-exists-at-all' },
      ],
    },
  ]
</script>

<div class="py-4 text-gray-500 dark:text-gray-400">
  {#if withTitle}
    <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/"> Windmill </a>
  {/if}
  <ul class="mt-6">
    {#each links as link, a}
      <li class="relative px-6 py-3">
        {#if activeMenu == link.url}
          <span
            class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          />
        {/if}

        {#if !link.sublinks}
          <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            class:text-gray-800={activeMenu == link.url}
            class:dark:text-gray-100={activeMenu == link.url}
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
        {:else}
          <button
            on:click={() => togglePageMenu(link.name)}
            class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            aria-haspopup="true"
          >
            <span class="inline-flex items-center">
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
                <path
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              <span class="ml-4">{link.name}</span>
            </span>
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          {#if $pageMenus[link.name]}
            <ul
              class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
              aria-label="submenu"
            >
              {#each link.sublinks as sublink, c}
                <li
                  class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <a class="w-full" href={sublink.url}>{sublink.name}</a>
                </li>
              {/each}
            </ul>
          {/if}
        {/if}
      </li>
    {/each}
  </ul>
  <div class="px-6 my-6">
    <button
      class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
    >
      Create account
      <span class="ml-2" aria-hidden="true">+</span>
    </button>
  </div>
</div>
