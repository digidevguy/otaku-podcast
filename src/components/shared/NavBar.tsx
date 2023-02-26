import { Button, ButtonGroup, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const NavBar: React.FC = () => {
	return (
		<Flex
			p={[2, 4]}
			align='center'
			justify='space-between'
			top={0}
			pos='sticky'
			zIndex='sticky'
			bg='white'
			boxShadow='sm'
		>
			<Link href='/'>
				<Heading>Navbar</Heading>
			</Link>
			<ButtonGroup variant='outline' colorScheme='blue'>
				<Link href='/articles'>
					<Button variant='ghost'>Articles</Button>
				</Link>
			</ButtonGroup>
		</Flex>
	);
};

export default NavBar;
