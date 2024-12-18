export type Post = {
	title: string
	slug: string
	description: string
	date: string
	tags: string[]
	published: boolean
}

export type SearchResult = {
	title: string
	slug: string
	content: string
}