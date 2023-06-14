import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
    if (params.slug === 'issue-analysis-tool') {
        return {
            title: 'Issue Analysis Tool',
            date: 'June 6th, 2023',
            painpoint: 'Poor depth and contextual understanding of issue and action plan data is a pain point in large organizations. Current Tableau or Power BI dashboards only allow for superficial extraction of data, like issue ownership and affected department, leaving internal auditors without the ability to dig deeper into issue themes and contexts. This shortfall necessitates time-consuming manual analysis, involving reading each issue individually, using professional judgement, and aggregating this information for trend analysis and analytics. This process is not only highly manual and repetitive but also compromises the effectiveness and efficiency of Internal Audit.',
            description: 'My tool leverages an internal large language model to analyze the text associated with each issue to predict relevant themes. The solution is flexible to the desired use case and can identify a broad range of themes. This customization allows organizations to define any desired quality, providing limitless opportunities for comprehensive issue tagging. Upon completion of analyzing, digesting, and tagging the issues, the tool transforms this data into accessible, visual information presented on a dashboard. Through intuitive graphs and charts help users easily understand and track issue trends over time.',
            tools: 'I created a Python script that uses Natural Language Processing (NLP) to tag each issue. Once tagged, the information is visualized in a dashboard that was created using HTML, CSS, and TypeScript.',
            content: ''
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;