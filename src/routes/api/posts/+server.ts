import type { Post } from '$lib/types';
import { json } from '@sveltejs/kit';

export const prerender = true;

async function getPosts(): Promise<Post[]> {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts = Object.entries(paths)
		.map(([path, file]) => {
			const slug = path.split('/').at(-1)?.replace('.md', '');
			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<Post, 'slug'>;
				return { ...metadata, slug } satisfies Post;
			}
			return null;
		})
		.filter((post): post is Post => post !== null && post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
