<script lang="ts">
    import { page } from '$app/stores'
</script>

<div class="grid place-content-center h-full">
    <h1>{$page.status}: {$page.error?.message}</h1>
    <p class="unstyled font-sans text-center">This makes Paul sad. Try checking the URL!</p>
</div>