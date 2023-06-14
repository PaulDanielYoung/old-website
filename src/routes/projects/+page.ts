import type { Projects } from '$lib/types'

export async function load({ fetch }) {
    const response = await fetch('api/projects')
    const projects: Projects[] = await response.json()
    return { projects }
}
