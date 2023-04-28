import { Track } from '@/types';
import { useEffect, useState, useRef } from 'react';

import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const NativePlayer = () => {
	const [tracks, setTracks] = useState<Track[]>([]);
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [timeProgress, setTimeProgress] = useState<number>(0);
	const [duration, setDuration] = useState<string>('');

	const audioRef = useRef<HTMLAudioElement>(null);
	const progressBarRef = useRef<HTMLInputElement>(null);

	// make GET request to api to get tracks and save to state
	useEffect(() => {
		const fetchTracks = async () => {
			const res = await fetch('/api/get-podcasts');
			const data = await res.json();
			setTracks(data);
		};
		fetchTracks();
	}, []);

	if (tracks.length === 0) return <p>Loading...</p>;
	return (
		<div>
			<div>
				<DisplayTrack
					track={tracks[currentTrackIndex]}
					{...{ audioRef, progressBarRef, setDuration }}
				/>
				<Controls
					{...{ audioRef, progressBarRef, duration, setTimeProgress }}
				/>
				<ProgressBar
					{...{ audioRef, progressBarRef, timeProgress, duration }}
				/>
			</div>
		</div>
	);
};

export default NativePlayer;
