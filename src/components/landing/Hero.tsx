import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import banner from '../../../public/assets/images/banner.png';

const HeroSection = () => {
	return (
		<Flex as='section' bg='brand.100'>
			<Image src={banner} alt='Hero-img' priority />
		</Flex>
	);
};

export default HeroSection;
