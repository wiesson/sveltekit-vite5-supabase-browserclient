<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(async () => {
		console.log(await $page.data.supabase.from("tastings").select("*"))
	})
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

