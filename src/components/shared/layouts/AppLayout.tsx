import Footer from '../Footer';
import NavBar from '../NavBar';
import { Flex, useColorModeValue } from '@chakra-ui/react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.400)',
		'linear(to-b,brand.700,brand.900)'
	);
	return (
		<>
			<NavBar />
			<Flex as='main' w='full' flexDir='column' minH='80vh' mx='auto'>
				{children}
			</Flex>
			<Footer />
		</>
	);
};

export default AppLayout;
