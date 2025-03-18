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
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';

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
			<!-- <Sidebar {tagClick} tags={cleanedTags} showSidebar={showSidebar}></Sidebar> -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
				<div class="bg-base-200 flex flex-col items-center">
					<div class="p-4"><img src="/about.jpg" alt="about" class="max-w-48 rounded-lg" /></div>
					<div class="px-14 prose-xl">
						{#key languageTag()}
							{#if languageTag() == availableLanguageTags[1]}
							<p>
								Je m'appelle Linyi, et bienvenue sur mon blog personnel. J'habite dans la magnifique ville de Montréal, où je consacre mon temps à explorer mes passions pour le développement logiciel, les aventures en plein air et le partage de connaissances.
							</p>
							{:else}
							<p>
								I'm Linyi, and welcome to my personal blog. I live in the beautiful city of Montreal, where I spend my time exploring my passions for software development, outdoor adventures, and sharing knowledge.
							</p>
							{/if}
						{/key}
					</div>
				</div>
				<div class="col-span-2">{@render children()}</div>
				<div></div>
			</div>
			
		</div>
	</div>
	<NavbarFooter></NavbarFooter>
</ParaglideJS>