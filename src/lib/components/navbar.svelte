<script>
	import ThemeController from "./theme-controller.svelte";

</script>
<div class="navbar bg-base-100 sticky top-0 z-10 backdrop-blur-sm">
    <div class="navbar-start">
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
          <li><a href="/about">About</a></li>
          <li><a href="/about">Contact</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl" href="/">Lin</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/about">About</a></li>
        <li><a href="/about">Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end mr-6">
      <a href="https://github.com/clock1998" aria-label="asd"><i class="fa-brands fa-github fa-lg"></i></a>
      <ThemeController></ThemeController>
    </div>
  </div>