import { Track } from '@/types';
import { useEffect, useState, useRef } from 'react';

import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

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

	// make GET request to api to get tracks and save to state
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
			<div>
				<DisplayTrack
					track={tracks[trackIndex]}
					{...{ audioRef, progressBarRef, setDuration, handleNext }}
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
				<ProgressBar
					{...{ audioRef, progressBarRef, timeProgress, duration }}
				/>
			</div>
		</div>
	);
};

export default NativePlayer;
