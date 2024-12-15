import { error } from '@sveltejs/kit'
import type { EntryGenerator } from './$types.js';
import { pathToSlug } from '$lib/utils.js';
export const prerender = true

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}

export const entries: EntryGenerator = async () => {
	const modules = import.meta.glob("../../posts/*.md");
	const entries = Object.keys(modules).map((path) => {
		return { slug: pathToSlug(path) };
	});

	return entries;
};