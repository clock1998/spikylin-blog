<script lang="ts">
	import type { LayoutData } from './$types';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Category from '$lib/components/category.svelte';
	import NavbarFooter from '$lib/components/navbar-footer.svelte';
	import { onMount, type Snippet } from 'svelte';
	import type { Post } from '$lib/types';
	let showSidebar = $state(false);

	let { data, children }: { data: LayoutData, children: Snippet } = $props();
	let tags:string[]=[]
	let posts:Post[] = $state(data.posts);
	posts.forEach(n=>tags = tags.concat(n.tags))
	let cleanedTags = $state([...new Set(tags)]);
</script>

<ParaglideJS {i18n}>
	<div class="grid h-screen grid-rows-[auto_1fr_auto]">
		<Navbar></Navbar>
		<div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
			<button class="btn fixed z-20 md:hidden" aria-label="asd" onclick={() => showSidebar=!showSidebar}>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  fill="none"
				  viewBox="0 0 24 24"
				  class="inline-block h-6 w-6 stroke-current">
				  <path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
			<aside class="{showSidebar ? '':'hidden'} lg:block fixed z-10 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto " >
				<Category tags={cleanedTags}></Category>
			</aside>
			<main class="p-4 max-w-4xl">
				<div class="w-full flex justify-center p-4">
					<label class="input input-bordered flex items-center gap-2 w-80">
						<input type="text" class="grow" placeholder="Search" />
						<svg
						  xmlns="http://www.w3.org/2000/svg"
						  viewBox="0 0 16 16"
						  fill="currentColor"
						  class="h-4 w-4 opacity-70">
						  <path
							fill-rule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clip-rule="evenodd" />
						</svg>
					  </label>
				</div>
				<div class="flex justify-center">
					{@render children()}
				</div>
			</main>
		</div>
		<NavbarFooter></NavbarFooter>
	</div>
</ParaglideJS>
