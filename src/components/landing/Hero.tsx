import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import bannerImg from '../../../public/assets/images/banner.png';

const HeroSection = () => {
	return (
		<Flex
			pos='relative'
			bg={useColorModeValue('brand.100', 'brand.700')}
			flexDir={['column', 'row']}
			w='full'
			align='center'
		>
			<Box pos='relative'>
				<Image src={bannerImg} alt='banner-img' />
				<Box
					bg='black'
					opacity={0.1}
					pos='absolute'
					top={0}
					left={0}
					right={0}
					bottom={0}
				/>
			</Box>
			<Flex h='full' flexDir='column' pl='4.16vw'>
				<Container maxW='30.7vw'>
					<Heading size={['xs', 'sm', 'lg']} my='1.7vw'>
						Your favorite anime-themed self-improvement podcast for freaks,
						geeks, and lost souls
					</Heading>
					<Button
						// display={['none', 'inherit']}
						// maxW={['25%', null, '30%']}
						colorScheme=' blue'
						// p={6}
					>
						Subscribe
					</Button>
				</Container>
			</Flex>
		</Flex>
	);

	// <Flex pos='relative' maxH='100vh'>
	// 				<Image
	// 					src='/senad-palic-Qcefx5xENeA-unsplash.jpg'
	// 					alt='banner image of anime portraits'
	// 					width={5751}
	// 					height={3834}
	// 				/>
	// 				<Flex
	// 					pos='absolute'
	// 					top={0}
	// 					left={0}
	// 					w='full'
	// 					// minH='100vh'
	// 					pt='250px'
	// 					pb='300px'
	// 				>
	// 					<Flex
	// 						mx='auto'
	// 						w='88%'
	// 						// mx='auto'
	// 						flexDir='column'
	// 						// pos='absolute'
	// 						color='white'
	// 						// top='50%'
	// 						// left='25%'
	// 						gap={4}
	// 						// transform={'translateY(-50%)'}
	// 					>
	// 						<Heading>ELEVATED X OTAKU</Heading>
	// 						<Text>
	// 							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
	// 							eiusmod tempor incididunt ut labore et dolore magna aliqua.
	// 						</Text>
	// 						<Button w='sm'>Get Started</Button>
	// 					</Flex>
	// 				</Flex>
	// 			</Flex>
};

export default HeroSection;
