<script lang="ts">
	import LanguageController from "./language-controller.svelte";
  import ThemeController from "./theme-controller.svelte";
  import * as m from '$lib/paraglide/messages.js'
	import { onMount } from "svelte";
	import { createPostsIndex, searchPostsIndex } from "$lib/search";

	let search: 'loading' | 'ready' = $state('loading');
	let searchTerm = $state('');
  type Result =
  {
    slug:string
    title: string
    content: string[],
  }
	let results:Result [] = $state([])
	onMount(async () => {
    	// get the posts)
    const response = await fetch('api/search')
    const posts: any[] = await response.json()
    console.log(posts)
		// create search index
    	createPostsIndex(posts)
    	// we're in business 🤝
		search = 'ready'
	})
	$effect(()=>{
		if (search === 'ready') {
		// runs each time `searchTerm` updates
			results = searchPostsIndex(searchTerm)
		}
	})
  
</script>
<div class="navbar sticky bg-base-100 top-0 z-10 backdrop-blur-sm">
    <div class="navbar-start">
      <a class="ml-4" href="/"><img src="/logo.png" alt="Logo" width="40px" class="rounded-lg"/></a>
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow">
          <li><a href="/about">{m.about()}</a></li>
          <li>
            <label class="mx-auto input input-bordered flex items-center w-80">
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
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      {#if search === 'ready'}
      <div class="search">
          <input
            bind:value={searchTerm}
            placeholder="Search"
            autocomplete="off"
            spellcheck="false"
            type="search"
          />

          <div class="results">
            {#if results}
              <ul>
                {#each results as result}
                  <li>
                    <a href="/{result.slug}">
                      {@html result.title}
                    </a>
                    <p>{@html result.content}</p>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        </div>
      {/if}
      <a class="btn btn-ghost" href="/about">{m.about()}</a>
      <label class="mx-auto input input-bordered flex items-center w-80">
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

    <div class="navbar-end">
      <ThemeController></ThemeController>
      <LanguageController></LanguageController>
    </div>
  </div>