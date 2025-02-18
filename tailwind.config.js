/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,jsx}'];
export const mode = 'jit';
export const theme = {
	extend: {
		colors: {
			primary: '#00040f',
			secondary: '#00f6ff',
			dimWhite: 'rgba(255, 255, 255, 0.7)',
			dimBlue: 'rgba(9, 151, 124, 0.1)',

			accentColor: '#ff822e',
			backgroundPrimary: '#ECECEC',
			backgroundSecondary: '#F8F8F9',

			djoleGray: '#7e7d7d',
			dwldBtnGray: '#23283C',
		},
		fontFamily: {
			outfit: ['Outfit', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
		},
		letterSpacing: {
			custom: '0.15em',
		},
	},
	screens: {
		xs: '480px',
		ss: '620px',
		sm: '768px',
		md: '1024px',
		lg: '1200px',
		xl: '1700px',
	},
};
export const plugins = [];
