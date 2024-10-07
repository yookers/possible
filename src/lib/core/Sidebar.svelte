<script lang="ts">
    import RiDashboardLine from 'svelte-remixicon/RiDashboardLine.svelte';
    import RiNodeTree from 'svelte-remixicon/RiNodeTree.svelte';
    import RiTerminalLine from 'svelte-remixicon/RiTerminalLine.svelte';
</script>

<nav
    class="fixed left-0 top-0 z-40 flex h-full w-12 flex-col border-r border-surface bg-background"
>
    <div class="flex h-full flex-col items-center justify-start gap-y-1 pt-12">
        <a
            href="/"
            class="flex size-9 items-center justify-center rounded-md hover:bg-surface-hover"
        >
            <RiDashboardLine class="size-5" />
        </a>
    </div>
</nav>
