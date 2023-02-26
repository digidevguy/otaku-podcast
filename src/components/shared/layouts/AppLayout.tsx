import { Flex } from '@chakra-ui/react';
import Footer from '../Footer';
import NavBar from '../NavBar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Flex flexDir='column'>
			<NavBar />
			{children}
			<Footer />
		</Flex>
	);
};

export default AppLayout;
