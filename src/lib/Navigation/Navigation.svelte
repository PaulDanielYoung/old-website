<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}

	import { page } from '$app/stores';

	let routeId: string = '';
	$: {
		if ($page?.route?.id) {
			routeId = $page.route.id;
		} else {
			routeId = '';
		}
	}
</script>

<nav class="px-4 py-0 md:py-2 md:p-0">
	<ul class="md:flex md:space-x-2 md:justify-center md:items-center space-y-4 md:space-y-0">	
		<li><a href="/" class={routeId === '/' ? "btn btn-sm bg-primary-300-600-token unstyled font-sans" : "btn btn-sm unstyled font-sans"} on:click={drawerClose}>Home</a></li>
		<li><a href="/projects" class={routeId.startsWith('/projects') ? "btn btn-sm bg-primary-300-600-token unstyled font-sans" : "btn btn-sm unstyled font-sans"} on:click={drawerClose}>Projects</a></li>
		<li><a href="/blog" class={routeId.startsWith('/blog') ? "btn btn-sm bg-primary-300-600-token unstyled font-sans" : "btn btn-sm unstyled font-sans"} on:click={drawerClose}>Blog</a></li>
		<li><a href="/about" class={routeId === '/about' ? "btn btn-sm bg-primary-300-600-token unstyled font-sans" : "btn btn-sm unstyled font-sans"} on:click={drawerClose}>About</a></li>
		<li><a href="/contact" class={routeId === '/contact' ? "btn btn-sm bg-primary-300-600-token unstyled font-sans" : "btn btn-sm unstyled font-sans"} on:click={drawerClose}>Contact</a></li>
	</ul>
</nav>
