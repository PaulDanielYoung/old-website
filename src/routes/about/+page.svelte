<script lang="ts">
    import Headshot from '$lib/Assets/images/Headshot.jpg'
</script>

<svelte:head>
    <title>About Paul Young</title>
</svelte:head>

<div class="w-screen p-4 lg:p-8 space-y-3">
    <h1>About</h1>
    <hr class="h-1"/>

    <div class="flex flex-col justify-center align-middle space-y-10">
        <div class="flex flex-col lg:flex-row justify-center items-center">
            <img src={Headshot} alt='Headshot' class="rounded-md object-cover w-full h-auto max-w-sm lg:max-w-md mb-4 lg:mb-0 lg:mr-4" loading="lazy" />
            <div class="flex flex-col items-start">
                <p class="max-w-sm lg:max-w-md xl:max-w-xl unstyled font-sans text-">
                    Paul Young is a freelance full-stack developer based in Washington D.C. and creates innovative content on the web.<br /><br />
                    Paul has prior audit and data analytic experience working at E*TRADE, Morgan Stanley, and the U.S. Securities and Exchange Commission. He holds a Bachelor of Business Administration from James Madison University, class of '19.<br /><br />
                    If you have any questions, comments, or just want to chat about potential projects, please don't hesitate to get in touch!<br /><br />
                    Resume is available upon request.
                </p>
            </div>
        </div>

        <h1 class="text-center">Services Offered</h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 max-w-sm lg:max-w-7xl mx-auto justify-items-stretch text-center">
            <div class="card border-t-[2px] border-primary-500 p-10 space-y-5">
                <h3 class="">Audit</h3>
                <hr />
                <p class="unstyled font-sans">I will work with you on all phases of information technology audits.</p>
                <div class="flex justify-center">
                    <ul class="list">
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Planning</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Walkthroughs</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Fieldwork</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Reporting</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card border-t-[2px] border-secondary-500 p-10 space-y-5">
                <h3 class="">Data Analytics</h3>
                <hr />
                <p class="unstyled font-sans">I will collaborate with you to provide insights into large and complex datasets.</p>
                <div class="flex justify-center">
                    <ul class="list">
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Assessment & Analysis</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Visualizations</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Model Development</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Training and Support</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card border-t-[2px] border-tertiary-500 p-10 space-y-5">
                <h3 class="">Web Development</h3>
                <hr />
                <p class="unstyled font-sans">I will partner with you to design, build, and manage functional web applications.</p>
                <div class="flex justify-center">
                    <ul class="list">
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Design & Prototyping</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Font & Back-End Development</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Testing & Deployment</span>
                        </li>
                        <li>
                            <span class="unstyled font-sans font-bold">-</span>
                            <span class="unstyled font-sans font-bold">Maintenance & Support</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <a href="/contact" class="unstyled font-sans btn btn-lg rounded-md bg-tertiary-300-600-token">Hire Paul</a>
        </div>
    </div>
</div>