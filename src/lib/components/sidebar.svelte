<script lang="ts">
    let { tags, tagClick, showSidebar }= $props();
    
</script>
<aside class="{showSidebar ? '':'hidden'} fixed z-10 inset-0 top-[3.8125rem] right-auto w-[19rem] overflow-y-auto bg-base-200 p-4 left-10 h-[calc(100vh-100px)] rounded-lg" >
    <div class="flex flex-wrap justify-start items-start gap-1">
        {#each tags as tag}
            <button class="btn btn-sm btn-neutral" onclick={()=>tagClick(tag) }><span class="surface-4">&num;{tag}</span></button>
        {/each}
    </div>
</aside>
