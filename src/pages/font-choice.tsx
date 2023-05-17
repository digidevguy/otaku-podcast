import { Flex, Heading, VStack, Text } from '@chakra-ui/react';

const testText = 'Whereas recognition of the inherent dignity';

const fontArr = [
	'Open Sans',
	'Merriweather',
	'Lobster',
	'Roboto',
	'Indie Flower',
	'Inconsolata',
	'Oswald',
	'Raleway',
	'Playfair Display',
	'Lora',
	'Slabo 27px',
	'Nunito',
	'Titillium Web',
	'Mukta',
	'Dosis',
	'Anton',
	'Dancing Script',
	'Exo 2',
	'Teko',
];

const FontChoice = () => {
	return (
		<Flex flexDir='column' minH='80vh' p={4} justify='center'>
			<Heading alignSelf='center'>Font Choices</Heading>
			<VStack py={4}>
				{fontArr.map((font) => (
					<Text key={font}>{testText}</Text>
				))}
			</VStack>
		</Flex>
	);
};

export default FontChoice;
