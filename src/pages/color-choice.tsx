import { NextPage } from 'next';
import { Box, Flex, Heading, HStack } from '@chakra-ui/react';

const ColorChoicePage: NextPage = () => {
	return (
		<Box
			flexDir='column'
			minH='85vh'
			p={4}
			gap={3}
			justifyContent='center'
			alignItems='center'
			textAlign='center'
			minW='100%'
		>
			<Heading alignSelf='center'>Color Pallete Idea</Heading>
			<HStack minH='70vh' justify='space-evenly'>
				<Flex bg='brand.100' h='70vh' w='10%' rounded={10} boxShadow='md' />
				<Flex bg='brand.200' h='70vh' w='10%' rounded={10} boxShadow='md' />
				<Flex bg='brand.300' h='70vh' w='10%' rounded={10} boxShadow='md' />
				<Flex bg='brand.400' h='70vh' w='10%' rounded={10} boxShadow='md' />
				<Flex bg='brand.500' h='70vh' w='10%' rounded={10} boxShadow='md' />
				<Flex bg='brand.600' h='70vh' w='10%' rounded={10} boxShadow='md' />
				<Flex bg='brand.700' h='70vh' w='10%' rounded={10} boxShadow='md' />
				<Flex bg='brand.800' h='70vh' w='10%' rounded={10} boxShadow='md' />
				<Flex bg='brand.900' h='70vh' w='10%' rounded={10} boxShadow='md' />
			</HStack>
		</Box>
	);
};

export default ColorChoicePage;
