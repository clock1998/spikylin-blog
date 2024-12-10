<script lang="ts">
	import { onMount } from 'svelte';
	import { themes } from '$lib/themes';

    let currentTheme = $state('');
    
    onMount(()=>{
        let theme = localStorage.getItem('theme')
        if (theme){
            currentTheme = JSON.parse(theme)
            // Find and check the corresponding input element
            const radioInputs = document.querySelectorAll<HTMLInputElement>(
                'input[name="theme-dropdown"]'
            );
            radioInputs.forEach((input) => {
                if (input.value === currentTheme) {
                    input.checked = true;
                }
            });
        }
    })

    function onclick(event: MouseEvent){
        let element: HTMLInputElement = event.target as HTMLInputElement;
        currentTheme = element.value
        localStorage.setItem('theme', JSON.stringify(element.value));
    }
</script>
<div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-xs m-1 flex justify-end w-32">
        <div class="w-10/12">
            {currentTheme}
        </div> 
        <svg
            width="12px"
            height="12px"
            class="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
    </div>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
        {#each themes as theme, index}
            <li>
                <input
                id={`${index}`}
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="{theme}"
                value="{theme}"
                onclick={onclick} />
            </li>
        {/each}
    </ul>
</div>