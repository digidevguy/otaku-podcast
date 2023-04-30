import NativePlayer from '@/components/podcast/NativePlayer';
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
		<Flex flexDir='column' p={10} align='center'>
			<VStack maxW='1100px' spacing={4}>
				<Heading>Podcast Library</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Text>
				<NativePlayer />
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
