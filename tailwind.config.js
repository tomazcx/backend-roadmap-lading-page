/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.vue", "./index.html"],
	theme: {
		fontFamily: {
			'sans': 'Roboto, sans-serif'
		},
		extend: {
			colors: {
				'primary': {
					DEFAULT: "#FF9000",
					dark: "#BC6D05",
					shadow: "#BC6D05CC"
				},
				'secondary': "#1E1E1E",
				'black': "#09090A",
				'silver': "#B6B6B6",
				'white': "#FFFFFF",
				'slate': "#2C2C2C"

			}
		},
	},
	plugins: [],
}

