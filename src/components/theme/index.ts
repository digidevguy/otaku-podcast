import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

const fonts = {
	...chakraTheme.fonts,
	body: 'Open Sans, sans-serif',
	heading: 'Bebas Neue, cursive',
};

const overrides = {
	...chakraTheme,
	fonts,
};

const customTheme = extendTheme(overrides);

export default customTheme;
