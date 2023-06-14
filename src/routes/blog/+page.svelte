<script lang="ts">
    import { formatDate } from '$lib/utils';

    export let data
</script>

<div class="w-screen p-4 lg:p-8 space-y-3">
    <h1>Blog</h1>
    <hr class="h-1"/>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-sm md:max-w-none mx-auto md:mx-0 justify-items-center md:justify-items-stretch">
        {#each data.posts as post}
            <a href={`blog/${post.slug}`} class="block card card-hover">
                <header class="card-header">
                    <div class="aspect-[21/9] bg-black/50 w-full flex justify-center items-center">
                        <img src={post.image} alt={post.imageAlt} class="w-full object-cover" />
                    </div>
                </header>
                <div class="p-4 space-y-4">
                    <h6 class="unstyled font-sans">{formatDate(post.date)}</h6>
                    <h3>{post.title}</h3>
                    <article>
                        <p class="unstyled font-sans">{post.description}</p>
                    </article>
                </div>
            </a>
        {/each}
    </ul>
</div>