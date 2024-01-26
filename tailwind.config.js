/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				golden: {
					500: '#FFF3E3', // light
					600: '#B88E2F' // main
				},
				gray: {
					500: '#B0B0B0', // light
					600: '#9F9F9F', // main
					700: '#898989',
					750: '#616161',
					800: '#666',
					900: '#333'
				}
			},
			fontSize: {
				sm: ['14px', '21px'],
				base: ['16px', '24px'],
				xl: ['20px', '30px'],
				'2xl': ['24px', '28.8px'],
				'3xl': ['24px', '36px'],
				'4xl': ['32px', '48px'],
				'5xl': ['40px', '48px'],
				'6xl': ['52px', '65px'],
				'7xl': ['48px', '72px']
			},
			container: {
				canter: true,
				padding: {
					DEFAULT: '1rem', //16px
					sm: '1rem', // 16px
					md: '1rem', // 16px
					xl: '1.375rem', // 22px
					'2xl': '4rem' // 64px
				}
			}
		}
	}
};
