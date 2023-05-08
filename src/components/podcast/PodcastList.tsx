import { useEffect, useState } from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import { Track } from '@/types';
import SinglePodPlayer from './SinglePodPlayer';

const PodcastList = () => {
	const [tracks, setTracks] = useState<Track[]>([]);

	// make a async fetch request to get the podcasts
	useEffect(() => {
		const fetchTracks = async () => {
			const res = await fetch('/api/get-podcasts');
			const data = await res.json();
			setTracks(data);
		};
		fetchTracks();
	}, []);

	return (
		<Stack direction='column' spacing={4}>
			{tracks.map((track) => (
				<SinglePodPlayer key={track.id} track={track} />
			))}
		</Stack>
	);
};

export default PodcastList;
