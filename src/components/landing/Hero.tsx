import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import bannerImg from '../../../public/assets/images/banner.png';

const HeroSection = () => {
	return (
		<Grid
			as='section'
			pos='relative'
			bg={useColorModeValue('brand.100', 'brand.700')}
			gridColumnGap='0px'
			gridRowGap='0px'
			// gridTemplateRows='23.95vw 5.902vw 13.125vw'
			// gridTemplateColumns='auto 44.3vw 15.4vw'
			gridTemplateRows='minmax(72.533w, 0.25fr) 74vw'
			gridTemplateColumns='67.4666vw 32.266vw'
			overflow='hidden'
			w='full'
		>
			<Box
				pos='relative'
				gridArea={['1 / 1 / 2 / 3', '1 / 1 / 2 / 2']}
				textAlign='center'
			>
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
			<Flex
				h='full'
				flexDir='column'
				justifyContent='center'
				alignItems={['center', 'flex-start']}
				// pl={[0, '4.166vw']}
				gridArea={['2 / 1 / 3 / 3', 'span 3 / span 1 / span 3 / span 1']}
				pt={['6.666vw', '0']}
				pb={['8vw', '0']}
			>
				<Flex
					textAlign='center'
					flexDir='column'
					alignItems='center'
					pos='relative'
					lineHeight='125%'
					p={4}
				>
					<Heading fontSize={['8vw', '2.916vw']}>Placeholder</Heading>
					<Box maxW='80.8vw' m={['4.266vw auto 5.866vw', '1.7vw 0']}>
						<Text fontSize={['md']}>
							Your favorite anime-themed self-improvement podcast for freaks,
							geeks, and lost souls
						</Text>
					</Box>
					<Button
						// display={['none', 'inherit']}
						// maxW={['25%', null, '30%']}
						colorScheme=' blue'
						// p={6}
					>
						Subscribe
					</Button>
				</Flex>
			</Flex>
		</Grid>
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
