import { NextPage } from 'next';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import cloudImg from '../../public/assets/shapes/cloud-banner.png';

const ColorChoicePage: NextPage = () => {
	return (
		<Stack
			direction='column'
			minH='85vh'
			p={4}
			spacing={3}
			justifyContent='center'
			alignItems='center'
			textAlign='center'
			minW='100%'
		>
			<Heading alignSelf='center'>Color Pallete Idea</Heading>
			<Stack>
				<Image src={cloudImg} alt='' />
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
