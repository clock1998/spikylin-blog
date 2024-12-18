<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import * as m from '$lib/paraglide/messages.js'
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { onMount } from 'svelte';
	import type { Post } from '$lib/types.js';
	import { getContext } from 'svelte';
    
    const postsState = getContext<{posts: Post[]}>('postsState');
    
    onMount(()=>{
        if(languageTag() == availableLanguageTags[1]){
            postsState.posts = postsState.posts.filter(n=>n.slug.split(".")[1] === "fr")
        }
        else{
            postsState.posts = postsState.posts.filter(n=>n.slug.split(".")[1] !== "fr")
        }
    });
    
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="flex flex-wrap gap-4 justify-center pb-10">
    <div class="hero bg-base-200 min-h-[47vh]">
        <div class="hero-content flex-col lg:flex-row prose">
          <img src="/about.jpg" alt="about" class="max-w-sm rounded-lg shadow-2xl" />
          <div class="pl-10 ">
            <h1>Hi there! 😎</h1>
          </div>
        </div>
    </div>
    {#each postsState.posts as post}
        <a href={post.slug}>
            <div class="card bg-base-300 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{post.title}</h2>
                    <p>{formatDate(post.date)}</p>
                    <p>{post.description}</p>
                </div>
            </div>
        </a>
    {/each}
</div>