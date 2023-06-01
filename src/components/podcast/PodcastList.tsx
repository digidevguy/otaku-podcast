import { useEffect, useState } from 'react';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import { Track } from '@/types';
import SinglePodPlayer from './SinglePodPlayer';
import LoadingCard from '../shared/LoadingCard';

type Props = {
	tracks: Track[];
};

const PodcastList = ({ tracks }: Props) => {
	return (
		<SimpleGrid
			spacing={4}
			alignItems='center'
			minChildWidth={[null, null, '544px']}
			justifyItems='center'
			w='full'
		>
			{tracks.map((track) => (
				<SinglePodPlayer key={track.id} track={track} />
			))}
		</SimpleGrid>
	);
};

export default PodcastList;
