<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Category from '$lib/components/category.svelte';
	import NavbarFooter from '$lib/components/navbar-footer.svelte';
	let { children } = $props();
	let showSidebar = $state(false);
</script>

<ParaglideJS {i18n}>
	<div class="grid h-screen grid-rows-[auto_1fr_auto]">
		<Navbar></Navbar>
		<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
			<div class="space-y-4 md:hidden">
				<button class="btn absolute z-20" aria-label="asd" onclick={() => showSidebar=!showSidebar}>
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
			</div>
			<aside class={showSidebar ? 'h-[calc(100vh-100px)] absolute top-15 z-10 md:hidden' : "hidden "}>
				<Category></Category>
			</aside>
		  	<aside class={" hidden md:block"}>
				<Category></Category>
			</aside>
			<main class="p-4 space-y-4 flex flex-col items-center">
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
				{@render children()}
			</main>
		</div>
		<NavbarFooter></NavbarFooter>
	</div>
</ParaglideJS>
