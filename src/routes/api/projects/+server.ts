// src/routes/api/projects/+server.ts
import { json } from '@sveltejs/kit';
import type { Projects } from '$lib/types';

async function getProjects() {
    const projects: Projects[] = [
        {
            slug: 'issue-analysis-tool',
            title: 'Issue Analysis Platform',
            date: '2023-06-06',
            description: 'A comprehensive, user-friendly way for Internal Audit professionals to dig deeper into company issues and action plans.',
            imgSource: 'https://placehold.jp/400x150.png',
            imgAlternate: 'Issue Analysis System for Internal Auditors'
        },
        // Add more projects as I need here...
    ];

    return projects;
}

export async function GET() {
    const projects = await getProjects();
    return json(projects);
}