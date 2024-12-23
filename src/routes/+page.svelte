<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import * as m from '$lib/paraglide/messages.js'
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import type { Post } from '$lib/types.js';
	import { getContext } from 'svelte';
    
    const postsState = getContext<{posts: Post[]}>('postsState');
    let posts:Post[] = $state([])
    $effect(()=>{
        if(languageTag() == availableLanguageTags[1]){
            posts = postsState.posts.filter(n=>n.slug.split(".")[1] === "fr")
        }
        else{
            posts = postsState.posts.filter(n=>n.slug.split(".")[1] !== "fr")
        }
    });
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="flex flex-wrap gap-4 justify-center pb-10">
    {#each posts as post}
        <a href={post.slug} class="no-underline">
            <div class="card bg-base-300 w-96 shadow-xl h-52  hover:bg-base-200 transition ease-in-out duration-300">
                <div class="card-body h-52">
                    <h2 class="card-title overflow-hidden text-ellipsis line-clamp-2">{post.title}</h2>
                    <p>{formatDate(post.date)}</p>
                    <p class="overflow-hidden text-ellipsis line-clamp-2">{post.description}</p>
                </div>
            </div>
        </a>
    {/each}
</div>