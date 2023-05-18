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
	Link as ChakraLink,
	Stack,
	IconButton,
	useDisclosure,
	useColorMode,
	useColorModeValue,
	Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { navigation } from '../../libs/navigation';
import { social } from '../../libs/social';
import NavButton from './NavButton';
import Image from 'next/image';

import logoImg from '../../../public/assets/images/logo with subtitle.png';

const NavBar: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Drawer isOpen={isOpen} onClose={onClose} placement='left'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Elevated X Otaku</DrawerHeader>
					<DrawerBody>
						<Stack spacing={3} direction='column'>
							{navigation.map(({ label, href }) => (
								<Link href={href} key={label}>
									<Button variant='ghost'>{label}</Button>
								</Link>
							))}
						</Stack>
					</DrawerBody>
					<DrawerFooter justifyContent='center'>
						<Stack direction='row'>
							{social.map(({ label, href, icon }) => (
								<IconButton
									key={label}
									as={ChakraLink}
									icon={icon}
									aria-label={label}
									variant='ghost'
									href={href}
									target='_blank'
								/>
							))}
						</Stack>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Flex
				p={[2, 4]}
				align='center'
				justify='space-between'
				top={0}
				pos='sticky'
				zIndex='sticky'
				// bg={colorMode === 'light' ? 'brand.100' : 'brand.700'}
				boxShadow='md'
			>
				<Stack spacing={3} direction='row' align='center'>
					<IconButton
						icon={<HamburgerIcon />}
						aria-label='Drawer menu'
						variant='ghost'
						onClick={onOpen}
						display={['inherit', null, 'none']}
					/>
					<Flex align='center' maxW='33%'>
						<Link href='/'>
							<Image src={logoImg} alt='Logo' />
						</Link>
					</Flex>
				</Stack>
				<Stack direction='row'>
					<ButtonGroup variant='outline' display={['none', null, 'inherit']}>
						{navigation.map(({ label, href }) => (
							<Link href={href} key={label}>
								<NavButton label={label} />
							</Link>
						))}
					</ButtonGroup>
					<IconButton
						icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
						aria-label='Toggle Dark Mode'
						variant='ghost'
						onClick={toggleColorMode}
						_hover={{
							bg: useColorModeValue('black', 'white'),
							color: useColorModeValue('white', 'black'),
						}}
					/>
				</Stack>
			</Flex>
		</>
	);
};

export default NavBar;
