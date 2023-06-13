import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';
import path from 'path';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
        './src/**/*.{html,js,svelte,ts}', 
        path.join(path.dirname(require.resolve('@skeletonlabs/skeleton')), '../**/*.{html,js,svelte,ts}')
    ],
	theme: {
		extend: {
			animation: {
				'scroll-image': 'scrollImage 7s linear infinite',
			},
			keyframes: {
				scrollImage: {
				'0%': { objectPosition: '0% 0%' },
				'10%': { objectPosition: '0% 0%' },
				'70%': { objectPosition: '0% 100%' },
				'80%': { objectPosition: '0% 100%' },
				'90%': { objectPosition: '0% 0%' },
				'100%': { objectPosition: '0% 0%' },
				},
			},
		},
	},
	plugins: [forms, typography, ...skeleton()],
}