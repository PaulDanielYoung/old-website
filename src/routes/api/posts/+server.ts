import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
    let posts: Post[] = [];

    const pathDict = import.meta.glob('/src/posts/*.md');

    for (const path in pathDict) {
        const importPromise = pathDict[path];
        const file = await importPromise();

        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug };
            post.published && posts.push(post);
        }
    }

    posts = posts.sort((first, second) => 
        new Date(second.date).getTime() - new Date(first.date).getTime());

    return posts;
}

export async function GET() {
    const posts = await getPosts();
    return json(posts);
}