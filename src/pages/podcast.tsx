import PodcastList from '@/components/podcast/PodcastList';
import LoadingCard from '@/components/shared/LoadingCard';
import { podcast } from '@/libs/podcast';
import { Track } from '@/types';
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
import { set } from 'date-fns';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const PodcastLibPage: NextPage = () => {
	const [tracks, setTracks] = useState<Track[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const iconColor = useColorModeValue('gray.500', 'gray.200');
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.200)',
		'none'
	);

	// make a async fetch request to get the podcasts
	useEffect(() => {
		const fetchTracks = async () => {
			setIsLoading(true);
			const res = await fetch('/api/get-podcasts');
			const data = await res.json();
			setTracks(data);
			setIsLoading(false);
		};
		fetchTracks();
	}, []);

	return (
		<>
			<VStack
				as='main'
				w='full'
				spacing={4}
				p={[2, 10]}
				mx='auto'
				bgGradient={bgGradient}
			>
				<Heading>Podcast Library</Heading>
				<Text
					p={2}
					// boxShadow={['none', 'sm']}
					// rounded='md'
					maxW='xl'
					// bg={useColorModeValue('brand.300', 'gray.700')}
				>
					Check out the Elevated X Otaku Podcast - the self-improvement podcast
					created for anime and manga fans that delivers empowering,
					entertaining, and insightful messages about love, life, and mental
					health through the lense of your favorite shows. Who knows, you may
					even catch a JoJo&apos;s reference.
				</Text>
				{isLoading ? (
					[...Array(4)].map((_, i) => <LoadingCard key={i} />)
				) : (
					<PodcastList tracks={tracks} />
				)}
				<Divider />
				<Flex
					as='section'
					gap={4}
					align='center'
					flexDir={['column', null, 'row']}
				>
					<VStack spacing={2}>
						<Text fontSize='sm'>
							Want to be kept up to date on new episodes?
						</Text>
						<Heading as='h2' size='md'>
							Subscribe using your favorite service
						</Heading>
						{!podcast ? (
							[...Array(4)].map((_, i) => <LoadingCard key={i} />)
						) : (
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
						)}
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
