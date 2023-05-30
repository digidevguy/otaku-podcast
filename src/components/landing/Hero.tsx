import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import swoop from '../../../public/assets/images/swoop.png';
import explainImg from '../../../public/assets/images/exo-explain.png';
import cloud1 from '../../../public/assets/shapes/cloud-1.png';
import cloud2 from '../../../public/assets/shapes/cloud-2.png';
import sun from '../../../public/assets/shapes/sun.png';

const HeroSection = () => {
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.300)',
		'gray.800'
	);
	return (
		<Flex
			as='section'
			alignContent='center'
			justifyContent='center'
			px={4}
			pt={2}
			bgGradient={bgGradient}
			pos='relative'
			overflow='hidden'
		>
			<Flex pos='absolute' top={[215, 175]} right={[-10, 50]}>
				<Image src={cloud2} alt='cloud' />
			</Flex>
			<Flex pos='absolute' top={[50, 25, -20]} left={[-30, 20, 80]}>
				<Image src={sun} alt='sun' />
			</Flex>
			<Stack direction={['column', null, 'row']} align='center' pt={[4, 0]}>
				<Stack justify='center' align='center' maxW='sm' zIndex={1}>
					<Text
						fontFamily='Carter One, cursive'
						textAlign='center'
						fontSize={['sm', 'md', 'xl']}
						fontWeight={300}
					>
						Looking for a place that seamlessly blends life lessons with your
						favorite anime, recommendations for your next binge session, cosplay
						inspiration, or simply a community of like-minded nerds and geeks?
						<br />
						<br />
						You&apos;ve come to the right place!
					</Text>
					<Flex w={['3xs', '2xs', 'xs']}>
						<Image src={swoop} alt='swoop' />
					</Flex>
				</Stack>
				<Box pos='relative' alignSelf='center' zIndex={1}>
					<Image
						src={explainImg}
						alt='Hero-img'
						style={{ maxHeight: '60vh', width: 'auto' }}
					/>
				</Box>
			</Stack>
			<Flex pos='absolute' bottom={25} left={[15, 40]}>
				<Image src={cloud1} alt='cloud' />
			</Flex>
		</Flex>
	);
};

export default HeroSection;
