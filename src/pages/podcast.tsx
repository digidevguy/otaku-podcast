import PodcastList from '@/components/podcast/PodcastList';
import { podcast } from '@/libs/podcast';
import {
	Button,
	Divider,
	Flex,
	Heading,
	IconButton,
	Link,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';

const PodcastLibPage: NextPage = () => {
	const iconColor = useColorModeValue('gray.500', 'gray.200');
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.400)',
		'linear(to-b,brand.700,brand.900)'
	);
	return (
		<>
			<VStack
				w='full'
				spacing={4}
				p={[2, 10]}
				mx='auto'
				// bgGradient={bgGradient}
			>
				<Heading>Podcast Library</Heading>
				<Text
					p={2}
					border='1px solid'
					borderColor={useColorModeValue('gray.100', 'gray.600')}
					boxShadow={['none', 'sm']}
					rounded='md'
					maxW='xl'
				>
					Check out the Elevated X Otaku Podcast - the self-improvement podcast
					created for anime and manga fans that delivers empowering,
					entertaining, and insightful messages about love, life, and mental
					health through the lense of your favorite shows. Who knows, you may
					even catch a JoJo&apos;s reference.
				</Text>
				<PodcastList />
				<Divider />
				<Flex gap={4} align='center' flexDir={['column', null, 'row']}>
					<VStack spacing={2}>
						<Text fontSize='sm'>
							Want to be kept up to date on new episodes?
						</Text>
						<Heading as='h2' size='md'>
							Subscribe using your favorite service
						</Heading>
						<Stack direction='row' p={2} spacing={4} justify='center'>
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
						</Stack>
					</VStack>
					<Divider
						orientation={useBreakpointValue({
							sm: 'horizontal',
							md: 'vertical',
							lg: 'vertical',
						})}
						w='10vh'
					/>
					<VStack spacing={2}>
						<Text fontSize='sm'>Do you have a recommendation?</Text>
						<Heading as='h2' size='md'>
							Send your thoughts and recommendations
						</Heading>
						<Button w='200px' alignSelf='center'>
							Send
						</Button>
					</VStack>
				</Flex>
			</VStack>
		</>
	);
};

export default PodcastLibPage;
