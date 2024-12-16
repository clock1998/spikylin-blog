<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import * as m from '$lib/paraglide/messages.js'
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { onMount } from 'svelte';
	import type { Post } from '$lib/types.js';

	let { data } = $props()
    let posts:Post[] = $state([]);
    onMount(()=>{
        if(languageTag() == availableLanguageTags[1]){
            posts = data.posts.filter(n=>n.slug.split(".")[1] === "fr")
        }
        else{
            posts = data.posts.filter(n=>n.slug.split(".")[1] !== "fr")
        }
    });
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<div class="flex flex-wrap gap-4 justify-center  ">
    {#each posts as post}
        <a class="link" href={post.slug}>
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

