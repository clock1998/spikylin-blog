import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki'

// Create a single highlighter instance
const highlighterPromise = createHighlighter({
    themes: ['poimandres'],
    langs: ['javascript', 'typescript','csharp', 'docker', 'html', 'json', 'mermaid', 'nginx', 'python', 'shellscript', 'sql', 'svelte', 'yaml']
});

/**
 * @type {import('mdsvex').MdsvexOptions}
 */
const mdsvexOptions = {
    extensions: ['.svx', '.md'],
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const highlighter = await highlighterPromise;
            const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
            return `{@html \`${html}\` }`
        }
    },
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	extensions: ['.svelte', '.svx', '.md'], 
};

export default config;
