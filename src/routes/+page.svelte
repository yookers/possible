<script lang="ts">
    import { invoke } from '@tauri-apps/api/core';
    import { BaseDirectory, readDir } from '@tauri-apps/plugin-fs';
    import { platform } from '@tauri-apps/plugin-os';

    let name = '';
    let greetMsg = '';
    let current_platform = platform();
    let file_list: string[] = $state([]);

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        greetMsg = await invoke('greet', { name });
    }

    async function read_files() {
        const files = await readDir('.', { baseDir: BaseDirectory.Home });
        for (const file of files) {
            file_list.push(file.name);
        }
    }
</script>

<div class="flex flex-col items-center justify-center">
    <h1>{current_platform}</h1>

    <form onsubmit={read_files}>
        <button type="submit">Read Files</button>
    </form>

    <p>{greetMsg}</p>

    <ul>
        {#each file_list as file}
            <li>{file}</li>
        {/each}
    </ul>
</div>
