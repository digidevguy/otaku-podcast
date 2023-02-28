import {
	Flex,
	Heading,
	HStack,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react';
import { social } from '@/libs/social';

const Footer: React.FC = () => {
	const iconColor = useColorModeValue('gray.500', 'gray.200');

	return (
		<Flex p={4} justify='center' bg={useColorModeValue('gray.700', 'gray.500')}>
			<HStack p={2} spacing={4}>
				{social.map(({ label, href, icon }) => (
					<IconButton
						key={label}
						as='a'
						icon={icon}
						aria-label={label}
						variant='ghost'
						color={iconColor}
					/>
				))}
			</HStack>
		</Flex>
	);
};

export default Footer;
