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
  <Badge type="info" class="px-2 py-1">Hello World!</Badge>
</div>

<h3 class="text-sm mt-2">Example:</h3>
<Code language="svelte">
  {"import Badge from '$lib/Components/Badge.svelte'"}<br /><br />
  {'<Badge type="primary" body="primary" />'}<br />
  {'<Badge type="secondary" body="secondary" />'}<br />
  {'<Badge type="success" body="success" />'}<br />
  {'<Badge type="danger" body="danger" />'}<br />
  {'<Badge type="warning" body="warning" />'}<br />
  {'<Badge type="info" body="info" />'}<br />
  {'<Badge type="light" body="light" />'}<br />
  {'<Badge type="dark" body="dark" />'}<br />
  {'<Badge type="info" class="px-2 py-1">Hello World!</Badge>'}
</Code>
