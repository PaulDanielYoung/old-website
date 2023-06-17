<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<h1 class="text-center mt-10 mb-2">{data.title}</h1>
<h3 class="text-center">{data.date}</h3>

<div class="mx-10 md:mx-16 mt-10 flex flex-col gap-y-2">
    <h2 class="">Pain Point:</h2>
    <p class="unstyled font-sans">{data.painpoint}</p>

    <h2 class="mt-10">Description:</h2>
    <p class="unstyled font-sans">{data.description}</p>

    <h2 class="mt-10">Tools Used:</h2>
    <p class="unstyled font-sans">{data.tools}</p>
</div>

<div class="p-4 md:p-8">
    <hr class="h-0.5 bg-surface-700-200-token"/>
</div>

<div class="flex justify-center">{@html data.content}</div>