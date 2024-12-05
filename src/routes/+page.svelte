<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<div class="flex ">
    {#each data.posts as post}
    <div class="w-full flex flex-col">
        <h2><a class="link" href={post.slug}>{post.title}</a></h2>
        <p>{formatDate(post.date)}</p>
        <p>{post.description}</p>
    </div>
    {/each}
</div>

