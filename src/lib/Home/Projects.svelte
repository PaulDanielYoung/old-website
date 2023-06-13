<script lang="ts">
    import ProjectTags from '$lib/Home/ProjectTags.svelte';

    export let title:string;
    export let datetime:string;
    export let dateformat:string;
    export let description:string;
    export let link:string;
    export let imgSrc:string;
    export let imgAlt:string;
    export let tags:string[];
    
</script>

<hr class="h-0.5 bg-surface-700-200-token"/>
<h3 class="unstyled font-sans text-lg md:text-xl xl:text-2xl text-center font-semibold">{title}</h3>
<time class="unstyled font-sans text-md xl:text-lg flex justify-center unstyled" {datetime}>{dateformat}</time>
<div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-7 xl:grid-cols-3 items-center justify-center">
    <div class="md:col-span-1 lg:col-span-4 xl:col-span-2 p-4 md:p-8">
        <div class="max-w-lg xl:max-w-3xl 2xl:max-w-7xl mx-auto">
            <p class="unstyled font-sans text-sm md:text-md xl:text-lg mb-4 leading-relaxed text-center">{@html description}</p>
            <div class="flex justify-center">
                <a href={link} class="unstyled font-sans btn btn-sm bg-primary-300-600-token">See More</a>
            </div>
        </div>		
    </div>
    <div class="container md:col-span-1 lg:col-span-3 xl:col-span-1 pb-4 flex flex-col items-center">
        <div class="w-[275px] h-[420px] md:w-[300px] md:h-[450px] xl:w-[325px] xl:h-[480px] bg-white rounded-lg shadow-md overflow-hidden">
            <img class="h-full w-full object-cover object-top border-4 border-slate-700 dark:border-slate-300 animate-scroll-image" src={imgSrc} alt={imgAlt}>
        </div>
        <div class="w-[325px] flex flex-wrap justify-center">
            <ProjectTags tags={tags} />
        </div>
    </div>
</div>