<script lang="ts">
  import ChevronUp from '$icon/ChevronUp/ChevronUp.svelte'
  import ChevronDown from '$icon/ChevronDown/ChevronDown.svelte'

  // export the data
  export let data = [
    {
      title: 'Accordion #1',
      show: false,
      body:
        'Deserunt irure qui mollit cillum labore officia do proident anim id adipisicing. Sint eiusmod elit eiusmod in culpa laboris velit duis culpa labore. Id minim reprehenderit Lorem ut. Esse qui sunt elit consequat nostrud ullamco nisi nisi dolor nulla id ad. Esse adipisicing quis voluptate voluptate. Est dolor duis proident voluptate. Elit aliqua aliqua ullamco incididunt irure eiusmod.',
    },
    {
      title: 'Accordion #2',
      show: false,
      body:
        'Eiusmod irure eiusmod laboris non laboris officia nostrud cupidatat ipsum minim ullamco et. Pariatur fugiat mollit duis aliquip exercitation. Et qui sint non magna sint id Lorem et laborum qui adipisicing ipsum. Enim deserunt mollit culpa deserunt. Anim nulla do eiusmod aliquip Lorem sunt elit quis eu aute quis. Cillum amet ut duis eu. Laborum dolor nulla excepteur officia.',
    },
    {
      title: 'Accordion #3',
      show: true,
      body:
        'In ea cillum consectetur dolore id id occaecat deserunt. Cillum dolor ea labore cillum in pariatur velit mollit. Nostrud dolor sint magna consequat laborum laboris quis do officia fugiat. In excepteur nulla officia aliqua consequat pariatur qui enim aliquip tempor aute minim non. Nostrud laborum tempor consectetur exercitation. Cupidatat mollit quis ea anim irure.',
    },
  ]

  // make the data reactive!
  $: data
</script>

<div class="border rounded-md">
  {#each data as datum, i}
    <div class:border-b={data.length !== i + 1}>
      <button
        class="w-full py-3 px-6 focus:outline-none"
        class:border-b={datum.show}
        class:bg-blue-100={datum.show}
        type="button"
        on:click={() => {
          datum.show = !datum.show
        }}
      >
        <div class="float-left">{datum.title}</div>
        <div class="float-right mt-1">
          {#if datum.show}
            <ChevronDown />
          {:else}
            <ChevronUp />
          {/if}
        </div>
      </button>
      <div class="py-3 px-6" class:hidden={!datum.show}>{datum.body}</div>
    </div>
  {/each}
</div>
