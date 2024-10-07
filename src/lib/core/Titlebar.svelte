<script lang="ts">
    import type { Window } from '@tauri-apps/api/window';
    import { onDestroy, onMount } from 'svelte';
    import RiCheckboxBlankLine from 'svelte-remixicon/RiCheckboxBlankLine.svelte';
    import RiCheckboxMultipleBlankLine from 'svelte-remixicon/RiCheckboxMultipleBlankLine.svelte';
    import RiCloseLine from 'svelte-remixicon/RiCloseLine.svelte';
    import RiSubtractLine from 'svelte-remixicon/RiSubtractLine.svelte';

    // @ts-expect-error: Does not detect __TAURI__.window
    const { getCurrentWindow } = window.__TAURI__.window;

    const appWindow: Window = getCurrentWindow();

    let isMaximized = $state(false);
    let unlisten: () => void;

    async function updateIsMaximized() {
        isMaximized = await appWindow.isMaximized();
    }

    onMount(async () => {
        unlisten = await appWindow.onResized(updateIsMaximized);
    });

    onDestroy(() => {
        unlisten();
    });
</script>

<div
    data-tauri-drag-region
    class="fixed left-0 top-0 z-50 flex h-10 w-full select-none items-center justify-between border-b border-surface bg-background"
>
    <div class="flex h-full items-center px-4">
        <p data-tauri-drag-region class="text-sm font-medium">Possible</p>
    </div>

    <div class="flex h-full items-center">
        <button
            class="flex h-full w-12 items-center justify-center hover:bg-slate-600"
            onclick={() => appWindow.minimize()}
        >
            <RiSubtractLine class="size-4" />
        </button>
        <button
            class="flex h-full w-12 items-center justify-center hover:bg-slate-600"
            onclick={() => appWindow.toggleMaximize()}
        >
            {#if isMaximized}
                <RiCheckboxMultipleBlankLine class="size-3.5" />
            {:else}
                <RiCheckboxBlankLine class="size-3.5" />
            {/if}
        </button>
        <button
            class="flex h-full w-12 items-center justify-center hover:bg-red-600"
            onclick={() => appWindow.close()}
        >
            <RiCloseLine class="size-5" />
        </button>
    </div>
</div>
