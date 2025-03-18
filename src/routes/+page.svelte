<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import * as m from '$lib/paraglide/messages.js';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { getContext } from 'svelte';
	import type { Post } from '$lib/types';

	const postsState = getContext<{ posts: Post[] }>('postsState');
	let posts: Post[] = $state([]);
	
	$effect(() => {
		if (languageTag() == availableLanguageTags[1]) {
			posts = postsState.posts.filter((n) => n.slug.split('.')[1] === 'fr');
		} else {
			posts = postsState.posts.filter((n) => n.slug.split('.')[1] !== 'fr');
		}
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<div class="mx-auto my-3 max-w-4xl">
	<div class="divider text-2xl font-semibold">Featured</div>
	<ul class="list">
		{#each posts.filter((n) => n.featured) as post}
			<a href={post.slug}>
				<li class="list-row">
					<div class="prose">
						<h4>[{post.date}] {post.title}</h4>
						<p>{post.description}</p>
						<div>
							{#each post.tags as tag}
								<span class="px-1">&num;{tag}</span>
							{/each}
						</div>
					</div>
				</li>
			</a>
		{/each}
	</ul>
	<div class="divider text-2xl font-semibold">Posts</div>
	<ul class="list">
		{#each posts as post}
			<a href={post.slug}>
				<li class="list-row">
					<div class="prose">
						<p>[{post.date}] {post.title}</p>
						{#each post.tags as tag}
							<span class="pr-1">&num;{tag}</span>
						{/each}
					</div>
				</li>
			</a>
		{/each}
	</ul>
</div>
