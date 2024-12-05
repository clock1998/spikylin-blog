<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Category from '$lib/components/category.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="h-screen"> 
		<Navbar></Navbar>
		<div class="drawer lg:drawer-open">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content md:h-[85vh]">
				<label for="my-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost md:hidden">
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
				</label>
				<div class="p-4">
					{@render children()}
				</div>
			</div>
			<div class="drawer-side z-10 md:h-[85vh]">
			  <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
				<Category></Category>
			</div>
		  </div>
		  <footer class="p-4 text-center">(footer)</footer>
	</div>
</ParaglideJS>
