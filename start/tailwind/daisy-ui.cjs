// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	// darkMode: false,
	content: ['./src/**/*.{html,js,svelte,ts}'],
	purge: ['./src/*.html', './src/**/*.html', './src/**/*.svelte'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	theme: {
		// ...defaultTheme
	},
	safelist: ['h-*'],
	daisyui: {}
}
