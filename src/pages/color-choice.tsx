import { NextPage } from 'next';
import { Flex, Heading, Stack } from '@chakra-ui/react';

const ColorChoicePage: NextPage = () => {
	return (
		<Stack
			direction='column'
			p={4}
			spacing={4}
			alignItems='center'
			textAlign='center'
		>
			<Heading alignSelf='center'>Proposed Color branding</Heading>
			<Stack direction='row' w='full' justify='space-around'>
				{[...Array(3)].map((_, i) => (
					<Heading alignSelf='center' key={i}>
						Brand.{i + 1}00
					</Heading>
				))}
			</Stack>
			<Stack direction='row' h='50vh' w='full' justify='space-evenly'>
				<Flex bg='brand.100' w='25%' rounded={10} boxShadow='md' />
				<Flex bg='brand.200' w='25%' rounded={10} boxShadow='md' />
				<Flex bg='brand.300' w='25%' rounded={10} boxShadow='md' />
			</Stack>
		</Stack>
	);
};

export default ColorChoicePage;
