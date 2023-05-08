import { Track } from '@/types';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

// TODO: Add a loading skeleton component
// TODO: Replace base elements with Chakra UI components
// TODO: Add styling to the player
const NativePlayer = () => {
	const [tracks, setTracks] = useState<Track[]>([]);

	const [trackIndex, setTrackIndex] = useState(0);
	const [currentTrack, setCurrentTrack] = useState<Track>(
		tracks[trackIndex] as Track
	);
	const [timeProgress, setTimeProgress] = useState<number>(0);
	const [duration, setDuration] = useState<string>('');

	const audioRef = useRef<HTMLAudioElement>(null);
	const progressBarRef = useRef<HTMLInputElement>(null);

	const handleNext = () => {
		if (trackIndex >= tracks.length - 1) {
			setTrackIndex(0);
			setCurrentTrack(tracks[0]);
		} else {
			setTrackIndex((prev) => prev + 1);
			setCurrentTrack(tracks[trackIndex + 1]);
		}
	};

	useEffect(() => {
		const fetchTracks = async () => {
			const res = await fetch('/api/get-podcasts');
			const data = await res.json();
			setTracks(data);
			setCurrentTrack(data[trackIndex]);
		};
		fetchTracks();
	}, [trackIndex]);

	if (tracks.length === 0) return <p>Loading...</p>;
	return (
		<div>
			<Flex flexDir='column' gap={4}>
				<DisplayTrack
					track={tracks[trackIndex]}
					{...{ audioRef, progressBarRef, setDuration, handleNext }}
				/>
				<ProgressBar
					{...{ audioRef, progressBarRef, timeProgress, duration }}
				/>
				<Controls
					{...{
						audioRef,
						progressBarRef,
						duration,
						setTimeProgress,
						tracks,
						trackIndex,
						setTrackIndex,
						setCurrentTrack,
						handleNext,
					}}
				/>
			</Flex>
		</div>
	);
};

export default NativePlayer;
