import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime'
import { error } from '@sveltejs/kit'
export const prerender = true

export async function load({ params }) {
	try {
        let about = await import('./content.md')
        switch(languageTag()) {
            case availableLanguageTags[1]:
                about = await import('./content.fr.md')
                break;
        }

		return {
			content: about.default,
			meta: about.metadata
		}
	} catch (e) {
		
	}
}
