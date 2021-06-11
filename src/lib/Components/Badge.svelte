<script>
  export let type = 'primary'
  export let body = null

  $: type
  $: body
</script>

<span class="inline-block {type} px-2 py-1 rounded-sm">
  {#if body}
    {body}
  {:else}
    <slot />
  {/if}
</span>
