import { Track } from '@/types';
import { useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const NativePlayer = () => {
	const [tracks, setTracks] = useState<Track[]>([]);
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	// make GET request to api to get tracks and save to state
	useEffect(() => {
		const fetchTracks = async () => {
			const res = await fetch('/api/get-podcasts');
			const data = await res.json();
			setTracks(data);
		};
		fetchTracks();
	}, []);

	useEffect(() => console.log(tracks), [tracks]);

	const togglePlaying = () => {
		setIsPlaying(!isPlaying);
	};

	if (tracks.length === 0) return <p>Loading...</p>;
	return (
		<div>
			<audio src={tracks[currentTrackIndex].audio_url} />
			<button onClick={togglePlaying}>
				{isPlaying ? <FaPause /> : <FaPlay />}
			</button>
		</div>
	);
};

export default NativePlayer;
