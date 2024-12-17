<script>
	import LanguageController from "./language-controller.svelte";
  import ThemeController from "./theme-controller.svelte";
  import * as m from '$lib/paraglide/messages.js'
</script>
<div class="navbar bg-base-100 sticky top-0 z-10 backdrop-blur-sm">
    <div class="navbar-start">
      <a class="ml-4" href="/"><img src="/logo.png" alt="Logo" width="40px" class="rounded-lg"/></a>
      <div class="hidden lg:flex">
        <a class="btn btn-ghost" href="/about">{m.about()}</a>
        <a class="btn btn-ghost" href="/contact">{m.contact()}</a>
      </div>
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
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a href="/about">{m.about()}</a></li>
          <li><a href="/contact">{m.contact()}</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <ThemeController></ThemeController>
      <LanguageController></LanguageController>
    </div>
  </div>