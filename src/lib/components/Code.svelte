<script lang="ts">
  export let language = null
  export let data = []
</script>

<code
  class="block rounded-lg text-sm text-gray-200 bg-gray-800 dark:text-gray-800 dark:bg-gray-200 px-3 pb-4 mb-2"
>
  {#if language}
    <span class="text-xs block py-2 px-0 text-orange-400 dark:text-orange-600">// {language}</span>
  {:else}
    <span class="block py-2 px-0" />
  {/if}

  {#if data.length}
    {#each data as datum, i}
      <pre class="inline-block">{datum}</pre>

      {#if data.length !== i + 1}
        <br />
      {/if}
    {/each}
  {:else}
    <slot />
  {/if}
</code>
