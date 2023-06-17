<script lang="ts">
  import Projects from '$lib/Home/Projects.svelte'
  import AnimatedHeadline from '$lib/Home/AnimatedHeadline.svelte'
</script>

<svelte:head>
    <title>Paul Young's Personal Website</title>
</svelte:head>

<div class="w-screen p-4 md:p-8 space-y-3">

	<div>
		<h1 class="unstyled text-center -mb-7 md:-mb-6 xl:-mb-5 p-4 text-2xl md:text-4xl xl:text-7xl">Hi, I'm Paul Young and I </h1>
		<h1 class="unstyled text-center text-2xl md:text-4xl xl:text-7xl">
		<AnimatedHeadline 
			texts={["write code", "think about problems", "analyze data", "stay ahead of the curve", "create value", "want to work with you"]} 
			wait={3000} 
			fade={600}
			slide={1000}
		/>.</h1>
	
		<h2 class="unstyled font-sans text-sm md:text-lg xl:text-2xl text-center p-4">I create innovative, technology-driven solutions that make people's lives easier.</h2>
	</div>

	<h2 class="unstyled text-2xl xl:text-4xl pt-5">Projects</h2>
	
	<Projects 
		title="Issue Analysis Platform"
		datetime="2023-06-06"
		dateformat="June 6th, 2023"
		description="I created a web application that provides a comprehensive, user-friendly way for Internal Audit professionals to dig deeper into company issues and action plans. The application leverages a large language model from OpenAI to analyze the text associated with issues and predict themes. A dashboard is updated to reflect the new issues and tags.</br></br> No more lengthy analyses or manual reporting! Just real-time, insightful data at your fingertips."
		link="/projects/issue-analysis-tool"
		imgSrc="/images/personal-website.jpg"
		imgAlt="Issues Analysis Tool"
		tags={['Svelte', 'SvelteKit', 'TailwindCSS', 'Vite', 'Vercel']}
	/>
	
</div>
