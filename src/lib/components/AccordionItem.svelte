<script lang="ts">
  import { fly } from 'svelte/transition'
  import ChevronUp from '$icon/ChevronUp/ChevronUp.svelte'
  import ChevronDown from '$icon/ChevronDown/ChevronDown.svelte'

  export let title = 'My accordion title'
  export let type = 'primary'
  export let show = false

  $: show
</script>

<div class="border-b border-gray-500 dark:border-gray-600">
  <button
    class="w-full px-4 py-3 text-sm font-semibold focus:outline-none {show &&
      `border-b border-gray-500 dark:border-gray-600 ${type}`}"
    type="button"
    on:click={() => {
      show = !show
    }}
  >
    <div class="float-left">{title}</div>
    <div class="float-right mt-1">
      {#if show}
        <ChevronDown />
      {:else}
        <ChevronUp />
      {/if}
    </div>
  </button>
  {#if show}
    <div transition:fly={{ duration: 50 }} class="py-3 px-6 text-sm">
      <slot />
    </div>
  {/if}
</div>
