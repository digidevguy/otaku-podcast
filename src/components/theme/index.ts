import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const fonts = {
	...chakraTheme.fonts,
	body: 'Roboto, sans-serif',
	heading: 'Signika, sans-serif',
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

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const customTheme = extendTheme({
	...chakraTheme,
	fonts,
	config,
	colors: brandColors,
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				bgGradient: mode('linear(to-r,blue.200,green.400', 'brand.700')(props),
			},
		}),
	},
});

export default customTheme;
