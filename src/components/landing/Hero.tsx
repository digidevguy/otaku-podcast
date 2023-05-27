import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import bannerImg from '../../../public/assets/images/banner.png';

const HeroSection = () => {
	return (
		<>
			<Box pos='relative'>
				<Image src={bannerImg} alt='banner-img' />
				{/* <Box
					bg='black'
					opacity={0.1}
					pos='absolute'
					top={0}
					left={0}
					right={0}
					bottom={0}
				/> */}
			</Box>
		</>
	);
};

export default HeroSection;
