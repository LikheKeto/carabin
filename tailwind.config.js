/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#F0EFED',
				secondary: '#B38549',
				accent: '#B38549',
				neutral: '#393F50',
				base: '#1C2127'
			},
			fontFamily: {
				sans: ['Roboto', 'Arial', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	},
	plugins: []
};
