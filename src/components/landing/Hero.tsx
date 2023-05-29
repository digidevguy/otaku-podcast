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
		<Flex as='section' alignContent='center' justifyContent='center' px={4}>
			<Stack direction={['column', 'row']} align='center' pt={[4, 0]}>
				<Stack justify='center' align='center' maxW='sm'>
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
