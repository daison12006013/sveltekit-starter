<script lang="ts">
  import Alert from '$lib/Components/Alert.svelte'
  import Code from '$lib/Components/Code.svelte'
</script>

<span class="text-xl">Alerts</span>
<Alert type="primary" />
<Alert type="secondary" />
<Alert type="success" />
<Alert type="danger" />
<Alert type="warning" />
<Alert type="info" />
<Alert type="light" />
<Alert type="dark" />

<h3 class="text-sm mt-2">Example:</h3>
<Code language="svelte">
  {'<!-- The `type` can be (primary, secondary, success, danger, warning, info, light, dark -->'}<br
  /><br />
  {'<Alert type="primary" body="Hello World!" />'}
</Code>
