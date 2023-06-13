<script lang="ts">
    import { AppBar, drawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings } from '@skeletonlabs/skeleton';
    import Navigation from '$lib/Navigation/Navigation.svelte';
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import { storePopup } from '@skeletonlabs/skeleton';

    export let isMedium: boolean;
    export let logoId: string;

    const drawerSettings: DrawerSettings = {
        width: 'w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4',
        padding: 'p-4',
        rounded: 'rounded-xl',
        position: 'right',
    };

    function drawerOpen(): void {
        drawerStore.open(drawerSettings);
    }

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppBar background='bg-slate-100 dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-80' padding="px-4">
    <svelte:fragment slot="lead">
        <a href="/" class="flex flex-row justify-center place-items-center logo -ml-4" id={logoId}>
        <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 70" width="125" height="50">
        <text class="text1" x="0" y="50" font-size="45" fill=blue>
            Paul
        </text>
        <text class="text2" x="20" y="50" font-size="45" fill=red>
            Paul
        </text>
    </svg>
</a>

    </svelte:fragment>
    
    <svelte:fragment slot="trail">
        {#if isMedium}
            <button class="btn btn-sm" on:click={drawerOpen}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </span>
            </button>
        {:else}
            <div class="hidden md:block">
                <Navigation />
            </div>					
        {/if}
    </svelte:fragment>
</AppBar>

<style>
    .text1, .text2 {
        transition: transform .5s, fill 1s;
        fill: currentColor;
    }

    @media (min-width: 1025px) {
        .text1 {
            fill: rgba(0, 0, 255, 0.66); /* blue with 50% opacity */
        }
        
        .text2 {
            fill: rgba(255, 0, 0, 0.66); /* red with 50% opacity */
        }

        .logo:hover .text1 {
            transform: translateX(10px);
            fill: currentColor;
        }

        .logo:hover .text2 {
            transform: translateX(-10px);
            fill: currentColor;
        }
    }

    @media (max-width: 1024px) {
        .text2 {
            display: none;
        }
    }
</style>