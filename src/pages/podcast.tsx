import PodcastList from '@/components/podcast/PodcastList';
import LoadingCard from '@/components/shared/LoadingCard';
import { podcast } from '@/libs/podcast';
import { Track } from '@/types';
import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	IconButton,
	Link,
	Stack,
	Text,
	useBreakpointValue,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import matterOfFact from '../../public/assets/images/gestures/matter_of_face_post_resized.png';
import Image from 'next/image';
import darkTriangle from '../../public/assets/shapes/dark-triangle.png';
import whiteTriangle from '../../public/assets/shapes/white-triangle.png';

const PodcastLibPage: NextPage = () => {
	const [tracks, setTracks] = useState<Track[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { colorMode } = useColorMode();

	const sideBubbleDisplay = useBreakpointValue({ base: 'none', md: 'block' });
	const bottomBubbleDisplay = useBreakpointValue({ base: 'block', md: 'none' });

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
			<Stack
				as='main'
				justify='space-around'
				align='center'
				direction='column'
				// w='full'
				spacing={4}
				p={[2, 10]}
				mx='auto'
				bgGradient={bgGradient}
				minH='80vh'
			>
				<Heading>Podcast Library</Heading>
				<Stack
					direction={['column', null, 'row']}
					spacing={6}
					align='center'
					justify='center'
				>
					<Flex pos='relative' maxW={['full', null, '30%']}>
						<Text
							p={3}
							fontSize={['sm', 'md']}
							bg={useColorModeValue('white', 'gray.700')}
							rounded='md'
							zIndex={1}
						>
							Check out the Elevated X Otaku Podcast - the self-improvement
							podcast created for anime and manga fans that delivers empowering,
							entertaining, and insightful messages about love, life, and mental
							health through the lense of your favorite shows. Who knows, you
							may even catch a JoJo&apos;s reference.
						</Text>
						<Box
							display={['none', null, 'block']}
							pos='absolute'
							top={45}
							right={-2}
							w={4}
							zIndex={0}
						>
							{colorMode === 'light' ? (
								<Image
									src={whiteTriangle}
									alt='Text Triangle'
									style={{
										display: sideBubbleDisplay,
										transform: 'rotate(-90deg)',
									}}
									priority
								/>
							) : (
								<Image
									src={darkTriangle}
									alt='Text Triangle'
									style={{
										display: sideBubbleDisplay,
										transform: 'rotate(-90deg)',
									}}
									priority
								/>
							)}
						</Box>
						<Box
							display={['block', null, 'none']}
							pos='absolute'
							right={225}
							bottom={-3}
							w={4}
							zIndex={0}
						>
							{colorMode === 'light' ? (
								<Image
									src={whiteTriangle}
									alt='Text Triangle'
									style={{
										display: bottomBubbleDisplay,
									}}
									priority
								/>
							) : (
								<Image
									src={darkTriangle}
									alt='Text Triangle'
									style={{
										display: bottomBubbleDisplay,
									}}
									priority
								/>
							)}
						</Box>
					</Flex>
					<Box w='25%' maxH='xl' overflow='hidden'>
						<Image
							src={matterOfFact}
							alt='Matter of Fact Podcast Cover'
							priority
						/>
					</Box>
				</Stack>
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
						<Button
							w='200px'
							alignSelf='center'
							bg={useColorModeValue('brand.300', 'gray.600')}
						>
							Send
						</Button>
					</VStack>
				</Flex>
			</Stack>
		</>
	);
};

export default PodcastLibPage;
