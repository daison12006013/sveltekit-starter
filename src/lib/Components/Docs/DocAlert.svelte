<script lang="ts">
  import Alert from '$lib/Components/Alert.svelte'
  import Code from '$lib/Components/Code.svelte'
</script>

<span class="text-xl">Alerts</span>
<Alert type="primary">A simple primary alert</Alert>
<Alert type="secondary">A simple secondary alert</Alert>
<Alert type="success">A simple success alert</Alert>
<Alert type="danger">A simple danger alert</Alert>
<Alert type="warning">A simple warning alert</Alert>
<Alert type="info">A simple info alert</Alert>
<Alert type="light">A simple light alert</Alert>
<Alert type="dark">A simple dark alert</Alert>

<h3 class="text-sm mt-2">Example:</h3>
<Code language="svelte">
  {"import Alert from '$lib/Components/Alert.svelte'"}<br /><br />
  {'<Alert type="info" body="Hello World!" />'}<br />
  {'<Alert type="primary">A simple primary alert</Alert>'}
</Code>
