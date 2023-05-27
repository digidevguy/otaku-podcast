import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import heroImg from '../../../public/assets/images/erin_on_demand_creator_to_ceo.png';

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
					<Heading as='h1' textAlign='center' size='lg' mb={1}>
						H1 placeholder
					</Heading>
					<Heading as='h2' textAlign='center' size='md'>
						H2 placeholder
					</Heading>
					<Text textAlign='center' fontSize='sm'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
						<br />
						<br />
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</Text>
					<Button>Join me</Button>
				</Stack>
				<Box pos='relative' alignSelf='center'>
					<Image
						src={heroImg}
						alt='Hero-img'
						style={{ maxHeight: '40vh', width: 'auto' }}
					/>
				</Box>
			</Stack>
		</Flex>
	);
};

export default HeroSection;
