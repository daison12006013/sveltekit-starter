<script lang="ts">
	import '../tailwind.css';

	import Header from '$lib/Components/Header/index.svelte';
	import Footer from '$lib/Components/Footer/index.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
