import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'
import  removeMd from 'remove-markdown'
export const prerender = true;

async function getPosts() {

    const paths = import.meta.glob('/src/posts/*.md', { query: '?raw', eager: true });
    const paths2 = import.meta.glob('/src/posts/*.md', { eager: true });

    const posts = [];
    
    for (const path in paths) {
        const slug = path.split('/').at(-1)?.replace('.md', '');
        const content = paths[path] as { default: string }
        const contentWithMetadata:any = paths2[path]; // Access the value using the key
        if (contentWithMetadata && typeof content === 'object' && 'metadata' in contentWithMetadata && slug) {
            const metadata = contentWithMetadata.metadata as Omit<Post, 'slug'>
            posts.push({
                title: metadata.title,
                slug: slug,
                content: removeMd(content.default), // Ensure the type matches
            });
        }
    }
	return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
