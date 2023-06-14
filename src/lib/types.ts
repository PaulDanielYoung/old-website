export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories[]
    published: boolean,
    image: string,
    imageAlt: string
}
export interface Projects {
    slug: string
    title: string
    date: string
    description: string
    imgSource: string
    imgAlternate: string
}