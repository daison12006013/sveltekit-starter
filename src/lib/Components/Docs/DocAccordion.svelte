<script lang="ts">
  import Accordion from '$lib/Components/Accordion.svelte'
  import Code from '$lib/Components/Code.svelte'
</script>

<span class="text-xl">Accordion</span>
<Accordion type="danger" />

<h3 class="text-sm mt-2">Example:</h3>
<Code language="svelte">
  {"let myColor = 'danger' // can be (primary, secondary, success, danger, warning, info, light, dark) "}<br
  />
  {`let myData = [{heading: 'Accordion #1',show: false, body: 'The body...'}]`}<br /><br />
  {'<Accordion type={myColor} data={myData} />'}
</Code>
