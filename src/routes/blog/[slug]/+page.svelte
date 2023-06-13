<script lang="ts">
    import { formatDate } from '$lib/utils'

    export let data
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="p-4 md:p-8 mx-auto max-w-4xl">
    <hgroup class='text-center'>
        <h1>{data.meta.title}</h1>
        <p class="unstyled font-sans">Published: {formatDate(data.meta.date)}</p>
    </hgroup>

    <div class="text-center mt-2 space-x-1">
        {#each data.meta.categories as category}
            <span class="chip variant-filled unstyled font-sans rounded-lg">{category}</span>
        {/each}
    </div>

    <div class="mt-10 unstyled font-sans">
        <svelte:component this={data.content} />
    </div>
</article>