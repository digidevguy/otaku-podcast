import {
	Button,
	ButtonGroup,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	HStack,
	VStack,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import { navigation } from '../../libs/navigation';

const NavBar: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Drawer isOpen={isOpen} onClose={onClose} placement='left'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Elevated X Otaku</DrawerHeader>
					<DrawerBody>
						<VStack spacing={3}>
							{navigation.map(({ label, href }) => (
								<Link href={href} key={label}>
									<Button variant='ghost'>{label}</Button>
								</Link>
							))}
						</VStack>
					</DrawerBody>
					<DrawerFooter>Footer</DrawerFooter>
				</DrawerContent>
			</Drawer>
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
				<HStack spacing={3}>
					<IconButton
						icon={<HamburgerIcon />}
						aria-label='Drawer menu'
						variant='ghost'
						onClick={onOpen}
						display={['inherit', 'none']}
					/>
					<Link href='/'>
						<Heading>Navbar</Heading>
					</Link>
				</HStack>
				<ButtonGroup variant='outline' display={['none', 'inherit']}>
					{navigation.map(({ label, href }) => (
						<Link href={href} key={label}>
							<Button variant='ghost'>{label}</Button>
						</Link>
					))}
				</ButtonGroup>
			</Flex>
		</>
	);
};

export default NavBar;
