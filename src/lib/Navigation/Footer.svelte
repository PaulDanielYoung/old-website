<script lang="ts">
    import { LightSwitch } from '@skeletonlabs/skeleton'
</script>

<div class="flex flex-col justify-between p-4 md:flex-row-reverse place-items-center gap-4 bg-slate-100 dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-80">
    <div class="flex flex-row gap-8 md:mr-8">	
        <a href="https://www.linkedin.com/in/paul-daniel-young" target="_blank" rel="noreferrer">
            <svg id="footersvg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black dark:text-white feather feather-github"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://github.com/PaulDanielYoung" target="_blank" rel="noreferrer">
            <svg id="footersvg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black dark:text-white feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
        <a href="mailto:pauldanielyoung@outlook.com" target="_blank" rel="noreferrer">
            <svg id="footersvg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black dark:text-white feather feather-github"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>
        </a>
    </div>
     <LightSwitch class="hidden md:block"/>
    <p class="unstyled font-sans md:ml-4 text-center">Copyright © 2023 Paul Young. All rights reserved.</p>
</div>

<style>
	#footersvg {
	transition: transform 0.3s ease;
	}

	#footersvg:hover {
	transform: scale(1.25);
	}
</style>