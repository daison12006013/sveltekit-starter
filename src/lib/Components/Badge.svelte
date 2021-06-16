<script>
  export let type = 'primary'
  export let body = null
  export let roundedSize = 'sm'
  export let customClass = ''

  $: type
  $: body
</script>

<span class="inline-block {type} {customClass} rounded-{roundedSize}">
  {#if body}
    {body}
  {:else}
    <slot />
  {/if}
</span>
