<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import * as m from '$lib/paraglide/messages.js'
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { getContext } from 'svelte';
	import Carousel from '$lib/components/carousel.svelte';
	import PostCard from '$lib/components/post-card.svelte';
	import type { Post } from '$lib/types';
    
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
<div class="max-w-4xl mx-auto my-3">
    <Carousel
    posts={posts.filter(n=>n.featured)}
    autoplay={true}
    interval={4000}
    />
</div>
<div class="flex flex-wrap gap-4 justify-center pb-10">
    {#each posts as post}
        <PostCard post={post}></PostCard>
    {/each}
</div>