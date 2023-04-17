import Player from '@/components/podcast/Player';
import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';

const PodcastLibPage: NextPage = () => {
	return (
		<Flex flexDir='column' p={10} align='center' minH='80vh'>
			<VStack maxW='1000px'>
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
				<Player />
			</VStack>
		</Flex>
	);
};

export default PodcastLibPage;
