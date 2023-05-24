import Footer from '../Footer';
import NavBar from '../NavBar';
import { Container, Flex, useColorModeValue } from '@chakra-ui/react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.400)',
		'linear(to-b,brand.700,brand.900)'
	);
	return (
		<>
			<NavBar />
			<Flex w='full' bgGradient={bgGradient}>
				<Flex as='main' flexDir='column' minH='80vh' maxW='1200px' mx='auto'>
					{children}
				</Flex>
			</Flex>
			<Footer />
		</>
	);
};

export default AppLayout;
