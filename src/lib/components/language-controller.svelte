<script lang="ts">
	import { availableLanguageTags, languageTag, type AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
    const labels = {
        en: "En",
        fr: "Fr"
    }
</script>

<select class="select select-sm ml-2" on:change={e => switchToLanguage(e.currentTarget.value as AvailableLanguageTag)}>
    {#each availableLanguageTags as langTag}
        <option 
            value={langTag}
            selected={languageTag() === langTag}
            >{labels[langTag]}
        </option>
    {/each}
</select>
