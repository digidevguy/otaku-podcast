import {
	Divider,
	Flex,
	Heading,
	IconButton,
	Link,
	SimpleGrid,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react';
import { social } from '@/libs/social';
import { podcast } from '@/libs/podcast';

const Footer: React.FC = () => {
	const iconColor = useColorModeValue('gray.500', 'gray.200');

	return (
		<Flex
			bg={useColorModeValue('gray.700', 'gray.500')}
			justify='center'
			py={4}
		>
			<Stack
				// flexDir={['column', null, 'row']}
				direction={['column', null, 'row']}
				p={[2, 2, 4]}
				justify='space-around'
				bg={useColorModeValue('gray.700', 'gray.500')}
				color='white'
				align='center'
				// h={[null, null, '30vh']}
				maxW={['full', null, '90%']}
			>
				<Stack direction='column' spacing={2}>
					<Text textTransform='uppercase'>Sign up for updates</Text>
					<Heading size={['md', 'lg']} p={2}>
						Subscribe to the show, stay up to date
					</Heading>
					<Text p={2}>
						Subscribe on your favorite platform today - you{'\u2019'}ll get
						notified for all new episodes.
					</Text>
				</Stack>
				<SimpleGrid columns={[6, null, 2]} p={2} spacing={[2, null, 4]}>
					{podcast.map(({ label, href, icon }) => (
						<IconButton
							key={label}
							as={Link}
							icon={icon}
							aria-label={label}
							href={href}
							variant='ghost'
							color={iconColor}
							target='_blank'
							isExternal
						/>
					))}
				</SimpleGrid>
				<Divider
					w={['80%', null, '0%']}
					h={['0%', null, '80%']}
					orientation={useBreakpointValue({
						sm: 'horizontal',
						md: 'vertical',
						lg: 'vertical',
					})}
				/>
				<Stack
					spacing={1}
					textAlign='center'
					maxW={['90%', null, '30%']}
					dir='column'
					align='center'
				>
					<Heading as='h3' size='md'>
						Join us on social media!
					</Heading>
					<Stack direction='row' p={1} spacing={2}>
						{social.map(({ label, href, icon }) => (
							<IconButton
								key={label}
								as={Link}
								icon={icon}
								aria-label={label}
								href={href}
								variant='ghost'
								color={iconColor}
								target='_blank'
								isExternal
							/>
						))}
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Footer;
