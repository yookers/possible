<script lang="ts">
    import type { Snippet } from 'svelte';

    import Sidebar from '$lib/core/Sidebar.svelte';
    import Titlebar from '$lib/core/Titlebar.svelte';

    import '../app.css';

    let { children }: { children: Snippet } = $props();
</script>

<Titlebar />

<Sidebar />

<main class="h-dvh overflow-auto pl-16 pr-4 pt-10">
    {@render children()}
</main>
