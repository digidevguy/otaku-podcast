import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<Flex
			pos='relative'
			w='full'
			flexDir='column'
			py={['20%', '15%', '15%']}
			overflow='hidden'
			justifySelf='center'
			alignSelf='center'
		>
			<Box pos='absolute' top={0} left={0} right={0} bottom={0}>
				<Image
					src='/assets/images/banner.png'
					alt='banner-img'
					fill
					// width={1920}
					// height={1080}
					style={{
						objectFit: 'cover',
					}}
				/>
				<Box
					bg='black'
					opacity={0.15}
					pos='absolute'
					top={0}
					left={0}
					right={0}
					bottom={0}
				/>
			</Box>
			<Flex pos='relative' flexDir='column' gap={2} zIndex={1} color='white'>
				{/* <Heading maxW={['90%', '75%', '50%']} size={['xs', 'sm', 'lg']}> */}
				<Heading size={['xs', 'sm', 'lg']}>
					Your favorite anime-themed self-improvement podcast for freaks, geeks,
					and lost souls
				</Heading>
				<Button
					display={['none', 'inherit']}
					maxW={['25%', null, '30%']}
					colorScheme=' blue'
				>
					Subscribe
				</Button>
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
