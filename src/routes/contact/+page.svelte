<script lang="ts">
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms/client';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

    export let data: PageData;

    // Client API:
    const { form, errors, constraints } = superForm(data.form);

    type Service = "audit" | "data-analytics" | "web-development";

/*     let contactForm = {
        full_name: '',
        email: '',
        company_name: '',
        title: '',
        service: 'audit' as Service | '',
        sub_service: '',
        message: ''
    };

    const services: Record<Service, string[]> = {
        "audit": ["All Phases", "Planning", "Walkthrough", "Fieldwork", "Reporting"],
        "data-analytics": ["Assessment & Analysis", "Visualizations", "Model Development", "Training and Support"],
        "web-development": ["Design & Prototyping", "Font & Back-End Development", "Testing & Deployment", "Maintenance & Support"]
    }; */
</script>

<div class="w-screen p-4 lg:p-8 space-y-3">
    <h1>Contact</h1>
    <hr class="h-1"/>

    <div class="card mx-auto p-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-10 items-center text-center md:text-left max-w-sm md:max-w-[1000px]">
        <div>
            <figure class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-40  rounded-full   mx-auto md:mx-0" data-testid="avatar">
                <img class="avatar-image w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/124548605?v=4" alt="" style="">
            </figure>
        </div>
        <div class="space-y-4">
            <h3>Paul Young</h3>
            <p class="unstyled font-sans">Entrepreneur possessing an established track record of over four years within internal audit departments in the financial services sector. His commitment to learning and eagerness for embracing challenges fuel his ongoing professional development.</p>
        </div>
        <div class="md:text-center space-y-8">
            <div class="space-y-2">
                <span class="block font-normal text-4xl">$150 / hr</span>
                <span class="block unstyled font-sans font-bold text-xs opacity-75">Minimum 2 hours</span>
            </div>
        </div>
    </div>

    <form method="POST" class="card variant-glass p-10 space-y-5 max-w-sm md:max-w-[1000px] mx-auto">
        <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="label" for="name">
                <span class="unstyled font-sans font-semibold">Full Name</span>
                <input class="input unstyled font-sans text-sm rounded-md" type="text" name="name" placeholder="Fred Rogers" aria-invalid={$errors.name ? 'true' : undefined} bind:value={$form.name} {...$constraints.name} required>
                {#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
            </label>
            <label class="label" for="email">
                <span class="unstyled font-sans font-semibold">Email</span>
                <input class="input unstyled font-sans text-sm rounded-md" type="email" name="email" placeholder="Fred.Rogers@neighborhood.com" aria-invalid={$errors.email ? 'true' : undefined} bind:value={$form.email} {...$constraints.email} required>
                {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
            </label>
            <label class="label" for="company_name">
                <span class="unstyled font-sans font-semibold">Company Name</span>
                <input class="input unstyled font-sans text-sm rounded-md" type="text" name="company_name" placeholder="Mister Rogers' Neighborhood" aria-invalid={$errors.company_name ? 'true' : undefined} bind:value={$form.company_name} {...$constraints.company_name} required>
            </label>
            <label class="label" for="title">
                <span class="unstyled font-sans font-semibold">Title</span>
                <input class="input unstyled font-sans text-sm rounded-md" type="text" name="title" placeholder="Educator, Puppeteer, Friend" aria-invalid={$errors.title ? 'true' : undefined} bind:value={$form.title} {...$constraints.title} required>
            </label>
            <!-- <label class="label">
        <span class="unstyled font-sans font-semibold">Service</span>
        <select bind:value={form.service} class="select unstyled font-sans text-sm rounded-md" name="service">
            <option value="audit">Audit</option>
            <option value="data-analytics">Data Analytics</option>
            <option value="web-development">Web Development</option>
        </select>
    </label>
    <label class="label">
        <span class="unstyled font-sans font-semibold">Sub-service</span>
        <select bind:value={form.sub_service} class="select unstyled font-sans text-sm rounded-md" name="sub_service">
            {#if form.service}
                {#each services[form.service] as sub_service}
                    <option value={sub_service}>{sub_service}</option>
                {/each}
            {/if}
        </select>
    </label>
        </fieldset>
        <fieldset class="grid grid-cols-1 gap-4">
            <label class="label col-span-2">
                <span class="unstyled font-sans font-semibold">Message</span>
                <textarea class="textarea unstyled font-sans text-sm rounded-md" name="message" rows="4" placeholder="Let me know how I can help..." required></textarea>
            </label>
        </fieldset>  -->
        <fieldset class="flex justify-between items-center gap-4">
            <p class="opacity-50 unstyled font-sans text-sm">I will typically contact you within 24-48 hours.</p>
            <button type="submit" class="btn variant-filled-primary unstyled font-sans text-sm font-bold rounded-md">Submit</button>
        </fieldset>
    </form>
    <SuperDebug data={$form} />
</div>