/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {},
		screens: {
			xs: { min: "479px" },
			// => @media (max-width: 1535px) { ... }

			sm: { min: "639px" },
			// => @media (max-width: 1279px) { ... }

			md: { min: "767px" },
			lg: { min: "1023px" },
			// => @media (max-width: 1023px) { ... }

			xl: { min: "1279px" },
			// => @media (max-width: 767px) { ... }

			"2xl": { min: "1535px" },
			// => @media (max-width: 639px) { ... }

			// => @media (max-width: 479px) { ... }
		},
	},
	plugins: [],
};




