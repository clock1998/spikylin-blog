<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import * as m from '$lib/paraglide/messages.js'

	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<h1>{m.hello_world()}</h1>
<div class="flex gap-4">
    {#each data.posts as post}
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

