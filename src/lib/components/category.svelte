<script lang="ts">
    let { tags, tagClick }= $props();
    
</script>
<div class="flex flex-wrap justify-start items-start gap-1">
    {#each tags as tag}
        <button class="btn btn-sm btn-neutral" onclick={()=>tagClick(tag) }><span class="surface-4">&num;{tag}</span></button>
    {/each}
</div>