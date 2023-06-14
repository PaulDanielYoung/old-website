<script lang="ts">
    type Service = "audit" | "data-analytics" | "web-development";

    let form = {
        full_name: '',
        email: '',
        company_name: '',
        title: '',
        service: '' as Service | '',
        sub_service: '',
        message: ''
    };

    const services: Record<Service, string[]> = {
        "audit": ["Planning", "Walkthrough", "Fieldwork", "Reporting"],
        "data-analytics": ["Assessment & Analysis", "Visualizations", "Model Development", "Training and Support"],
        "web-development": ["Front-end Development", "Back-end Development", "Full-stack Development", "Maintenance and Support"]
    };
</script>

<div class="w-screen p-4 lg:p-8 space-y-3">
    <h1>Contact</h1>
    <hr class="h-1"/>

    <form method="POST" class="card variant-glass p-10 space-y-5">
        <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="label">
                <span class="unstyled font-sans font-semibold">Full Name</span>
                <input class="input unstyled font-sans text-sm rounded-md" type="text" name="full_name" placeholder="Tiger Woods" required>
            </label>
            <label class="label">
                <span class="unstyled font-sans font-semibold">Email</span>
                <input class="input unstyled font-sans text-sm rounded-md" type="email" name="email" placeholder="tiger.woods@pgatour.com" required>
            </label>
            <label class="label">
                <span class="unstyled font-sans font-semibold">Company Name</span>
                <input class="input unstyled font-sans text-sm rounded-md" type="text" name="company_name" placeholder="PGA Tour" required>
            </label> <label class="label">
                <span class="unstyled font-sans font-semibold">Title</span>
                <input class="input unstyled font-sans text-sm rounded-md" type="text" name="title" placeholder="Greatest of All Time" required>
            </label>
            <label class="label">
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
        </fieldset>
        <fieldset class="flex justify-between items-center gap-4">
            <p class="opacity-50 unstyled font-sans text-sm">I will typically contact you within 24-48 hours.</p>
            <button type="submit" class="btn variant-filled-primary unstyled font-sans text-sm font-bold rounded-md">Submit</button>
        </fieldset>
    </form>
</div>