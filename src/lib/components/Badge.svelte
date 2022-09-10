<script lang="ts">
	export let type = 'primary'
	export let body: string | null = null
	export let roundedSize = 'sm'

	$: type
	$: body
</script>

<span class="inline-block {type} rounded-{roundedSize} {$$props.class}">
	{#if body}
		{body}
	{:else}
		<slot />
	{/if}
</span>
