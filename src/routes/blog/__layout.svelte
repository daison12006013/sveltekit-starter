<script lang="ts">
  import '$src/tailwind.css'
  import { fly } from 'svelte/transition'
  import { isSideMenuOpen, closeSideMenu } from '$stores/menus'
  import { clickOutside } from '$lib/IOEvents/click'
  import { keydownEscape } from '$lib/IOEvents/keydown'
  import SideBar from '$lib/Templates/Blog/SideBar.svelte'
  import Header from '$src/lib/Templates/Blog/Header.svelte'

  // ------------------------------------------------------------
  // Particles JS
  // ------------------------------------------------------------
  import { onMount } from 'svelte'
  import particlesConfig from '$lib/Templates/Blog/Config/particle.json'
  let ParticlesComponent: any

  onMount(async () => {
    const module = await import('$lib/Templates/Blog/Particles.svelte')
    ParticlesComponent = module.default
  })
  // ------------------------------------------------------------
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="w-full fixed bg-blog">
  <svelte:component
    this={ParticlesComponent}
    id="tsparticles"
    options={particlesConfig}
    customClass="h-screen"
  />
</div>

<div class="z-20 absolute w-full">
  <Header />
</div>

<section id="body" class="relative">
  <!-- Mobile sidebar -->
  <!-- Backdrop -->
  {#if $isSideMenuOpen}
    <div
      transition:fly={{ y: -800, x: -500, duration: 100 }}
      class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
    />
    <aside
      class="fixed inset-y-0 z-20 flex-shrink-0 w-full mt-16 overflow-y-auto md:hidden"
      use:clickOutside={['nav-mobile-hamburger']}
      on:click-outside={closeSideMenu}
      use:keydownEscape
      on:keydown-escape={closeSideMenu}
    >
      <SideBar />
    </aside>
  {/if}

  <slot />
</section>
