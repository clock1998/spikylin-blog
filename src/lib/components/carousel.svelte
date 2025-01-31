<script lang="ts">
	import { onMount } from 'svelte';
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	/**
	 * CarouselItem defines each slide.
	 * - component: A Svelte component to render for this slide
	 * - props: Optional props to pass to that component
	 * - key: Optional unique key for the slide (useful if reordering)
	 */
	// Props to configure the carousel
	let {
		posts = [],
		autoplay = false,
		interval = 3000
	}: { posts: Post[]; autoplay: boolean; interval: number } = $props();

	let currentIndex = $state(0);
	let intervalId: ReturnType<typeof setInterval> | undefined;

	// Move to next slide
	function next() {
		currentIndex = (currentIndex + 1) % posts.length;
	}

	// Move to previous slide
	function prev() {
		currentIndex = (currentIndex - 1 + posts.length) % posts.length;
	}

	onMount(() => {
		if (autoplay) {
			intervalId = setInterval(next, interval);
		}

		// Cleanup interval on unmount
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});
</script>

{#if posts.length > 0}
	<!-- Carousel Container -->
	<div class="relative h-96 w-full overflow-hidden">
		<!-- Slides -->
		{#each posts as post, index}
			<div
				class="absolute inset-0 transform transition-transform duration-500 ease-in-out"
				style="transform: translateX(calc({(index - currentIndex) * 100}%));"
			>
				<a href={post.slug} class="no-underline">
					<div
						class="card rounded-none h-96 w-full bg-base-300 transition duration-300 ease-in-out hover:bg-base-200"
					>
						<div class="card-body h-52">
							<h2 class="card-title line-clamp-2 overflow-hidden text-ellipsis">{post.title}</h2>
							<p>{formatDate(post.date)}</p>
							<p class="line-clamp-2 overflow-hidden text-ellipsis">{post.description}</p>
						</div>
					</div>
				</a>
			</div>
		{/each}

		<!-- Navigation Buttons (Prev / Next) -->
		<button
			class="absolute h-96 bg-gray-300 opacity-35 px-3 text-white hover:bg-gray-700 ease-in-out duration-500"
			onclick={prev} aria-label="Prev"
		>
        <i class="fa-solid fa-arrow-left"></i>
		</button>
		<button
			class="absolute h-96 right-0 bg-gray-300 opacity-35 px-3 text-white hover:bg-gray-700 ease-in-out duration-500"
			onclick={next} aria-label="Next"
		>
        <i class="fa-solid fa-arrow-right"></i>
		</button>
	</div>
{/if}
