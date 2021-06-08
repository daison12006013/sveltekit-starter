<script lang="ts">
  export let append = ''

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
        'Deserunt irure qui mollit cillum labore officia do proident anim id adipisicing. Sint eiusmod elit eiusmod in culpa laboris velit duis culpa labore. Id minim reprehenderit Lorem ut. Esse qui sunt elit consequat nostrud ullamco nisi nisi dolor nulla id ad. Esse adipisicing quis voluptate voluptate. Est dolor duis proident voluptate. Elit aliqua aliqua ullamco incididunt irure eiusmod.',
    },
    {
      title: 'Accordion #3',
      show: true,
      body:
        'Deserunt irure qui mollit cillum labore officia do proident anim id adipisicing. Sint eiusmod elit eiusmod in culpa laboris velit duis culpa labore. Id minim reprehenderit Lorem ut. Esse qui sunt elit consequat nostrud ullamco nisi nisi dolor nulla id ad. Esse adipisicing quis voluptate voluptate. Est dolor duis proident voluptate. Elit aliqua aliqua ullamco incididunt irure eiusmod.',
    },
  ]

  // make the data reactive!
  $: data
</script>

<div class="accordion {append}">
  {#each data as datum, i}
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          on:click={() => {
            datum.show = !datum.show
          }}>{datum.title}</button
        >
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" class:hidden={!datum.show}>
        <div class="accordion-body">{datum.body}</div>
      </div>
    </div>
  {/each}
</div>
