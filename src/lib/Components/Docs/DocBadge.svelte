<script lang="ts">
  import Badge from '$lib/Components/Badge.svelte'
  import Code from '$lib/Components/Code.svelte'
</script>

<span class="text-xl">Badges</span>

<div class="relative">
  <Badge type="primary" body="primary" />
  <Badge type="secondary" body="secondary" />
  <Badge type="success" body="success" />
  <Badge type="danger" body="danger" />
  <Badge type="warning" body="warning" />
  <Badge type="info" body="info" />
  <Badge type="light" body="light" />
  <Badge type="dark" body="dark" />
</div>

<h3 class="text-sm mt-2">Example:</h3>
<Code language="svelte">
  {"import Badge from '$lib/Components/Badge.svelte'"}<br /><br />
  {'<Badge type="warning" body="Hello World!" />'}<br />
  {'<Badge type="success">This is a badge</Badge>'}
</Code>
