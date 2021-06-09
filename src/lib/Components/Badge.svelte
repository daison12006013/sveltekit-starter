<script>
  export let type = 'primary'
  export let body = 'badge'

  $: type
  $: body
</script>

<span class="inline-block {type} px-2 py-1 rounded-sm">{body}</span>
