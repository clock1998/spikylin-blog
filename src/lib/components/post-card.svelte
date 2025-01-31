<script lang="ts">
	import type { Post } from "$lib/types";
	import { formatDate } from "$lib/utils";

    let { post } : {post: Post}= $props();
</script>
<a href={post.slug} class="no-underline">
    <div class="card bg-base-300 w-96 shadow-xl h-52  hover:bg-base-200 transition ease-in-out duration-300">
        <div class="card-body h-52">
            <h2 class="card-title overflow-hidden text-ellipsis line-clamp-2">{post.title}</h2>
            <p>{formatDate(post.date)}</p>
            <p class="overflow-hidden text-ellipsis line-clamp-2">{post.description}</p>
        </div>
    </div>
</a>