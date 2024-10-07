<script lang="ts">
    import { invoke } from '@tauri-apps/api/core';
    import { platform } from '@tauri-apps/plugin-os';
    import { onMount } from 'svelte';

    let name = '';
    let greetMsg = '';
    let current_platform = '';

    onMount(async () => {
        current_platform = await platform();
    });

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        greetMsg = await invoke('greet', { name });
    }
</script>

<div class="flex flex-col items-center justify-center">
    <h1>{current_platform}</h1>

    <form on:submit|preventDefault={greet}>
        <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
        <button type="submit">Greet</button>
    </form>

    <p>{greetMsg}</p>
</div>
