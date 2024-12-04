<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from './navbar.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="grid h-screen grid-rows-[auto_1fr_auto]">
		<Navbar></Navbar>
		<div class="grid grid-cols-1 md:grid-cols-3 md:w-5/6  md:mx-auto">
			<main class="space-y-4 bg-green-500 p-4 md:col-span-2">
				{@render children()}
			</main>
			<aside class="bg-yellow-500 p-4 sticky top-0 h-[calc(100vh-100px)]">(sidebar)</aside>
		</div>
		<footer class="p-4">(footer)</footer>
	</div>
</ParaglideJS>
