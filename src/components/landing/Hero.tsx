import { Flex, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import banner from '../../../public/assets/images/banner.png';

const HeroSection = () => {
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.300)',
		'gray.800'
	);
	return (
		<Flex as='section' bg='brand.100'>
			<Image src={banner} alt='Hero-img' />
		</Flex>
	);
};

export default HeroSection;
