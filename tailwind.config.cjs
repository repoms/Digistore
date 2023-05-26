/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'body': ['Basic font']
		},
		extend: {
			dropShadow: { 
				'med': '0 7px 15px rgba(0, 0, 0, 0.10)'
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=light]"],
					primary: "#FB933C",
				}
			}
		]
	}

}
