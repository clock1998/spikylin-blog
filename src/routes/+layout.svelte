<script lang="ts">
	import type { LayoutData } from './$types';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import NavbarFooter from '$lib/components/navbar-footer.svelte';
	import { type Snippet } from 'svelte';
	import { setContext } from 'svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	let { data, children }: { data: LayoutData, children: Snippet } = $props();

	let showSidebar = $state(false);
	let tags:string[]=[]
	data.posts.forEach(n=>tags = tags.concat(n.tags));
	let cleanedTags:string[] = $state([]);
	cleanedTags = [...new Set(tags)];
	let postsState = $state({ posts: data.posts });
	setContext('postsState', postsState );

	function tagClick(tag: string){
		postsState.posts = data.posts.filter(n=>n.tags.includes(tag))
	}
</script>

<ParaglideJS {i18n}>
	<div class="">
		<Navbar></Navbar>
		<button class="btn fixed z-20 top-1/2 px-1 " aria-label="asd" onclick={() => showSidebar=!showSidebar}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 stroke-current"
				>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</button>
		<div class="container mx-auto">
			<Sidebar {tagClick} tags={cleanedTags} showSidebar={showSidebar}></Sidebar>
			{@render children()}
		</div>
	</div>
	<NavbarFooter></NavbarFooter>
</ParaglideJS>