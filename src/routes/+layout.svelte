<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	
	inject({ mode: dev ? 'development' : 'production' });
	
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/atom-one-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);

	import { AppShell, LightSwitch, Drawer, drawerStore, focusTrap, setInitialClassState } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Header from '$lib/Navigation/Header.svelte';
	import Footer from '$lib/Navigation/Footer.svelte';
	import Transition from '$lib/Navigation/Transition.svelte'

	let windowWidth: number;
	let isFocused: boolean = true;
	let isMedium: boolean;
	let logoId: string = '';
	
	onMount(() => {
		updateWindowWidthAndCheckMedium();
		setInitialClassState();
	});

	const updateWindowWidthAndCheckMedium = () => {
		windowWidth = window.innerWidth;
		isMedium = windowWidth < 768;
		if (!isMedium) {
			logoId = 'headersvg';
			drawerStore.close();
		} else {
			logoId = ''
		}
		};

	export let data;
</script>

<svelte:window on:resize={updateWindowWidthAndCheckMedium} />

<Drawer>
	<div use:focusTrap={isFocused} class="flex flex-col h-full">
		<div class="flex justify-center pt-8">
			<Navigation />
		</div>
			<div class="h-2 flex-grow"></div>
		<div class="flex justify-center pb-8">
			<LightSwitch />
		</div>				
	</div>
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<Header isMedium={isMedium} logoId={logoId}/>
		<hr />
	</svelte:fragment>
	<Transition url={data.url}>
		<slot />
	</Transition>
	<svelte:fragment slot="pageFooter">
		<hr />
		<Footer />
	</svelte:fragment>
</AppShell>
