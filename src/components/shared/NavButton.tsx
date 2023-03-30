import { Button, useColorModeValue } from '@chakra-ui/react';

type NavButtonProps = {
	label: string;
};

const NavButton = ({ label }: NavButtonProps) => {
	return (
		<Button
			variant='ghost'
			_hover={{
				bg: useColorModeValue('black', 'white'),
				color: useColorModeValue('white', 'black'),
			}}
		>
			{label}
		</Button>
	);
};

export default NavButton;
