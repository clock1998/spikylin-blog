<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article  class="container prose max-w-4xl">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="flex gap-1">
		{#each data.meta.tags as tag}
            <button class="btn btn-sm btn-neutral"><span class="surface-4">&num;{tag}</span></button>
		{/each}
	</div>
    <data.content />
</article>
