<script lang="ts">
  import { fly } from 'svelte/transition'
  import ChevronUp from '$icon/ChevronUp/ChevronUp.svelte'
  import ChevronDown from '$icon/ChevronDown/ChevronDown.svelte'

  // export the data
  export let data = [
    {
      heading: 'Accordion #1',
      show: false,
      body:
        'Deserunt irure qui mollit cillum labore officia do proident anim id adipisicing. Sint eiusmod elit eiusmod in culpa laboris velit duis culpa labore. Id minim reprehenderit Lorem ut. Esse qui sunt elit consequat nostrud ullamco nisi nisi dolor nulla id ad. Esse adipisicing quis voluptate voluptate. Est dolor duis proident voluptate. Elit aliqua aliqua ullamco incididunt irure eiusmod.',
    },
    {
      heading: 'Accordion #2',
      show: false,
      body:
        'Eiusmod irure eiusmod laboris non laboris officia nostrud cupidatat ipsum minim ullamco et. Pariatur fugiat mollit duis aliquip exercitation. Et qui sint non magna sint id Lorem et laborum qui adipisicing ipsum. Enim deserunt mollit culpa deserunt. Anim nulla do eiusmod aliquip Lorem sunt elit quis eu aute quis. Cillum amet ut duis eu. Laborum dolor nulla excepteur officia.',
    },
    {
      heading: 'Accordion #3',
      show: true,
      body:
        'In ea cillum consectetur dolore id id occaecat deserunt. Cillum dolor ea labore cillum in pariatur velit mollit. Nostrud dolor sint magna consequat laborum laboris quis do officia fugiat. In excepteur nulla officia aliqua consequat pariatur qui enim aliquip tempor aute minim non. Nostrud laborum tempor consectetur exercitation. Cupidatat mollit quis ea anim irure.',
    },
  ]

  export let type = 'primary'

  // make the data reactive!
  $: data
  $: type
</script>

<div class="border border-gray-500 dark:border-gray-600 rounded-md">
  {#each data as datum, i}
    <div class={data.length !== i + 1 && 'border-b border-gray-500 dark:border-gray-600'}>
      <button
        class="w-full px-4 py-3 text-sm font-semibold focus:outline-none {datum.show &&
          `border-b border-gray-500 dark:border-gray-600 ${type}`}"
        type="button"
        on:click={() => {
          datum.show = !datum.show
        }}
      >
        <div class="float-left">{datum.heading}</div>
        <div class="float-right mt-1">
          {#if datum.show}
            <ChevronDown />
          {:else}
            <ChevronUp />
          {/if}
        </div>
      </button>
      {#if datum.show}
        <div transition:fly={{ duration: 50 }} class="py-3 px-6">
          {datum.body}
        </div>
      {/if}
    </div>
  {/each}
</div>
