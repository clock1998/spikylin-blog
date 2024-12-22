<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
    import Content from './content.md'
    import ContentFr from './content.fr.md'

</script>
{#key languageTag()}
<div class="hero bg-base-200 min-h-[87vh] ">
    <div class="hero-content flex-col lg:flex-row prose">
      <img src="/about.jpg" alt="about" class="max-w-sm rounded-lg shadow-2xl" />
      <div class="pl-10 ">
        {#if languageTag() == availableLanguageTags[1]}
            <ContentFr></ContentFr>    
        {:else}
            <Content></Content>    
        {/if}
      </div>
    </div>
</div>
{/key}