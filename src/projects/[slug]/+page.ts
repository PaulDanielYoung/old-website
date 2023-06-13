import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
    if (params.slug === 'issue-analysis-tool') {
        return {
            title: 'Issue Analysis Tool',
            date: 'June 9th, 2023',
            painpoint: 'This is the pain point I solved.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tools: 'This is a list of the tools I used to solve the pain point',
            content: ''
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;