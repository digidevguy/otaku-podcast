import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

const fonts = {
	...chakraTheme.fonts,
	body: 'Open Sans, sans-serif',
	heading: 'Bebas Neue, cursive',
};

const brandColors = {
	...chakraTheme.colors,
	brand: {
		100: '#FBCBD6',
		200: '#F3A783',
		300: '#CEA9CB',
		400: '#B4C7F2',
		500: '#AA6176',
		600: '#7B87AA',
		700: '#525D7C',
		800: '#46291A',
		900: '#1F1109',
	},
};

const overrides = {
	...chakraTheme,
	fonts,
	colors: brandColors,
};

const customTheme = extendTheme(overrides);

export default customTheme;
