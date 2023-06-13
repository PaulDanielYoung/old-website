<script lang="ts">
  export let tags:string[] = [];

  const tagLinks: { [key: string]: string } = {
    Svelte: 'https://svelte.dev/',
    SvelteKit: 'https://kit.svelte.dev/',
    TailwindCSS: 'https://tailwindcss.com/',
    'Skeleton UI': 'https://skeleton.dev/',
    Vite: 'https://vitejs.dev/',
    'D3.js': 'https://d3js.org/',
    'Python': 'https://www.python.org/',
    Vercel: 'https://vercel.com/home'
  }

</script>

<div class="flex flex-wrap mt-2 justify-center gap-2 pt-2">
  {#each tags as tag}
    <a class="unstyled flex flex-row justify-center items-center" href={tagLinks[tag]} target="_blank" rel="noopener noreferrer">
      <span
        class="unstyled font-sans chip bg-secondary-300-600-token text-surface-900-50-token px-2.5 py-0.5">
        {tag}
      </span>
    </a>
  {/each}
</div>