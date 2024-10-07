<script lang="ts">
    import { getCurrentWindow, type Window } from '@tauri-apps/api/window';
    import { onDestroy, onMount } from 'svelte';
    import RiCheckboxBlankLine from 'svelte-remixicon/RiCheckboxBlankLine.svelte';
    import RiCheckboxMultipleBlankLine from 'svelte-remixicon/RiCheckboxMultipleBlankLine.svelte';
    import RiCloseLine from 'svelte-remixicon/RiCloseLine.svelte';
    import RiSubtractLine from 'svelte-remixicon/RiSubtractLine.svelte';

    const app_window: Window = getCurrentWindow();

    let is_maximized = $state(false);
    let unlisten: () => void;

    async function update_is_maximized() {
        is_maximized = await app_window.isMaximized();
    }

    onMount(async () => {
        unlisten = await app_window.onResized(update_is_maximized);
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
            class="flex h-full w-12 items-center justify-center hover:bg-surface-hover"
            onclick={() => app_window.minimize()}
        >
            <RiSubtractLine class="size-4" />
        </button>
        <button
            class="flex h-full w-12 items-center justify-center hover:bg-surface-hover"
            onclick={() => app_window.toggleMaximize()}
        >
            {#if is_maximized}
                <RiCheckboxMultipleBlankLine class="size-3.5" />
            {:else}
                <RiCheckboxBlankLine class="size-3.5" />
            {/if}
        </button>
        <button
            class="flex h-full w-12 items-center justify-center hover:bg-red-600"
            onclick={() => app_window.close()}
        >
            <RiCloseLine class="size-5" />
        </button>
    </div>
</div>
