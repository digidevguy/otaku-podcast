import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const fonts = {
	...chakraTheme.fonts,
	body: 'Rubik, sans-serif',
	heading: 'Rubik, sans-serif',
};

const brandColors = {
	...chakraTheme.colors,
	brand: {
		100: '#008EFE',
		200: '#4BBCFD',
		300: '#99E6FE',
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
