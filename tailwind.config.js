/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.vue", "./index.html"],
	theme: {
		blur: {
			lg: "150px",
		},
		boxShadow: {
			'header': '0px 4px 20px 0px rgba(111, 62, 0, 0.80)',
			'container': '6px 0px 120px 0px rgba(207, 117, 0, 0.49)',
		},
		fontFamily: {
			'sans': 'Roboto, sans-serif'
		},
		extend: {
			colors: {
				'primary': {
					DEFAULT: "#FF9000",
					dark: "#BC6D05",
					shadow: "#BC6D05CC",
					blur: "rgba(255, 144, 0, 0.39)"
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

