import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import swoop from '../../../public/assets/images/swoop.png';
import explainImg from '../../../public/assets/images/exo-explain.png';

const HeroSection = () => {
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.400)',
		'linear(to-b,brand.700,brand.900)'
	);
	return (
		<Flex
			as='section'
			bgGradient={bgGradient}
			alignContent='center'
			justifyContent='center'
		>
			<Stack direction={['column', 'row']}>
				<Stack justify='center' align='center' maxW='sm'>
					{/* <Heading as='h1' textAlign='center' size='xl' mb={1} fontWeight={500}>
						Hi I'm Tiffany and I need anal in my life!
					</Heading>
					<Heading as='h2' textAlign='center' size='lg' fontWeight={500}>
						Yes I'm serious!
					</Heading> */}
					<Text
						fontFamily='Carter One, cursive'
						textAlign='center'
						fontSize='2xl'
						fontWeight={300}
						mb={4}
					>
						Looking for a place that seamlessly blends life lessons with your
						favorite anime, recommendations for your next binge session, cosplay
						inspiration, or simply a community of like-minded nerds and geeks?
						<br />
						<br />
						You&apos;ve come to the right place!
					</Text>
					<Image src={swoop} alt='swoop' />
				</Stack>
				<Box pos='relative' alignSelf='center'>
					<Image
						src={explainImg}
						alt='Hero-img'
						style={{ maxHeight: '60vh', width: 'auto' }}
					/>
				</Box>
			</Stack>
		</Flex>
	);
};

export default HeroSection;
