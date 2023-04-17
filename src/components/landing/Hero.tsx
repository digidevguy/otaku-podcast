import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

// TODO: Fix the image to be responsive
const HeroSection = () => {
	return (
		<Flex
			pos='relative'
			w='full'
			flexDir='column'
			py={['10%', '15%', '20%']}
			overflow='hidden'
		>
			<Box pos='absolute' top={0} left={0}>
				<Image
					src='/shubham-dhage-MpL4w1vb798-unsplash.jpg'
					alt='banner-img'
					width={3840}
					height={2160}
					// style={{
					// 	position: 'absolute',
					// 	top: 0,
					// 	left: 0,
					// 	right: 0,
					// 	bottom: 0,
					// }}
				/>
			</Box>
			<Flex
				pos='relative'
				flexDir='column'
				w='88%'
				mx='auto'
				gap={2}
				zIndex={1}
				color='white'
			>
				<Heading as='h1' size={['lg', '2xl']}>
					Elevated x Otaku
				</Heading>
				<Text maxW={['90%', '75%', '50%']} fontSize={['xs', 'sm', 'lg']}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
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
