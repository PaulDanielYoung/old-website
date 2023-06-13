/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
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
	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}