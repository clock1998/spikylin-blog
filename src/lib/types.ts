import type { Component } from "svelte"

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	tags: string[]
	published: boolean
	featured: boolean
}

export type SearchResult = {
	title: string
	slug: string
	content: string
}