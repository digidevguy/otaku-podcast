import NativePlayer from '@/components/podcast/NativePlayer';
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
	return (
		<Flex flexDir='column' p={[2, 10]} align='center'>
			<VStack maxW='1100px' spacing={4}>
				<Heading>Podcast Library</Heading>
				<Text p={2}>
					Check out the ElevatedXOtaku Podcast - the self-improvement podcast
					created for anime and manga fans that delivers empowering,
					entertaining, and insightful messages about love, life, and mental
					health through the lense of your favorite shows. Who knows, you may
					even catch a JoJo&apos;s reference.
				</Text>
				{/* <NativePlayer /> */}
				<PodcastList />
				<Divider />
				<Flex
					h={['45vh', '15vh']}
					gap={4}
					align='center'
					flexDir={['column', null, 'row']}
				>
					<Flex flexDir='column' gap={2}>
						<Text>Want to be kept up to date on new episodes?</Text>
						<Heading as='h2' size='lg'>
							Subscribe to the podcast using your favorite service
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
					</Flex>
					<Divider
						orientation={useBreakpointValue({
							sm: 'horizontal',
							md: 'vertical',
							lg: 'vertical',
						})}
					/>
					<Flex flexDir='column' gap={2}>
						<Text>Do you have a recommendation?</Text>
						<Heading as='h2' size='lg'>
							Send your throughts and recommendations
						</Heading>
						<Button size='lg' w='200px' colorScheme='blue' alignSelf='center'>
							Send
						</Button>
					</Flex>
				</Flex>
			</VStack>
		</Flex>
	);
};

export default PodcastLibPage;
