<script lang="ts">
    let { tags }: { tags: string[] } = $props();
</script>

<div class="bg-base-200 text-base-content min-h-full w-80 p-4 ">
    <div class="flex flex-wrap justify-start items-start gap-1">
        {#each tags as tag}
            <button class="btn btn-sm btn-neutral"><span class="surface-4">&num;{tag}</span></button>
        {/each}
    </div>
</div>