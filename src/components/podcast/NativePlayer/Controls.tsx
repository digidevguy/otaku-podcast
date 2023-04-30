import {
	IoPlayBackSharp,
	IoPlayForwardSharp,
	IoPlaySkipBackSharp,
	IoPlaySkipForwardSharp,
	IoPlaySharp,
	IoPauseSharp,
	IoVolumeLow,
	IoVolumeHigh,
	IoVolumeOff,
} from 'react-icons/io5';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Track } from '@/types';

type ControlsProps = {
	audioRef: React.MutableRefObject<HTMLAudioElement | null>;
	progressBarRef: React.MutableRefObject<HTMLInputElement | any>;
	duration: any;
	setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
	setTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTrack: React.Dispatch<React.SetStateAction<any>>;
	tracks: Track[];
	trackIndex: number;
	handleNext: () => void;
};

// TODO: Start adding onClick events to handle track navigation
const Controls = ({
	audioRef,
	progressBarRef,
	duration,
	setTimeProgress,
	tracks,
	trackIndex,
	setTrackIndex,
	setCurrentTrack,
	handleNext,
}: ControlsProps) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [volume, setVolume] = useState<number>(60);
	const [muteVolume, setMuteVolume] = useState<boolean>(false);
	const playAnimationRef = useRef<number>();

	const repeat = useCallback(() => {
		const currentTime = audioRef.current?.currentTime.toString();
		setTimeProgress(+currentTime!);
		progressBarRef.current!.value = currentTime!;
		progressBarRef.current!.style.setProperty(
			'--seek-before-width',
			`${(progressBarRef.current.value! / duration) * 100}%`
		);

		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, progressBarRef, setTimeProgress, duration]);

	const togglePlaying = () => {
		setIsPlaying(!isPlaying);
	};

	const handlePrev = () => {
		if (trackIndex <= 0) {
			setTrackIndex(tracks.length - 1);
			setCurrentTrack(tracks[tracks.length - 1]);
		} else {
			setTrackIndex((prev) => prev - 1);
			setCurrentTrack(tracks[trackIndex - 1]);
		}
	};

	const skipBack = () => {
		if (audioRef.current?.currentTime! <= 10) {
			handlePrev();
		} else {
			audioRef.current!.currentTime -= 15;
		}
	};

	const skipForward = () => {
		if (audioRef.current?.currentTime! >= audioRef.current?.duration! - 10) {
			handleNext();
		} else {
			audioRef.current!.currentTime += 15;
		}
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current?.play();
			playAnimationRef.current = requestAnimationFrame(repeat);
		} else {
			audioRef.current?.pause();
		}
	}, [isPlaying, audioRef, repeat]);

	useEffect(() => {
		if (audioRef) {
			audioRef.current!.volume = volume / 100;
			audioRef.current!.muted = muteVolume;
		}
	}, [volume, audioRef, muteVolume]);

	return (
		<div className='controls=wrapper'>
			<div className='controls'>
				<button onClick={handlePrev}>
					<IoPlaySkipBackSharp />
				</button>
				<button onClick={skipBack}>
					<IoPlayBackSharp />
				</button>
				<button onClick={togglePlaying}>
					{isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
				</button>
				<button onClick={skipForward}>
					<IoPlayForwardSharp />
				</button>
				<button onClick={handleNext}>
					<IoPlaySkipForwardSharp />
				</button>
			</div>
			<div className='volume'>
				<button onClick={() => setMuteVolume((prev) => !prev)}>
					{muteVolume || volume < 5 ? (
						<IoVolumeOff />
					) : volume < 40 ? (
						<IoVolumeLow />
					) : (
						<IoVolumeHigh />
					)}
				</button>
				<input
					type='range'
					min={0}
					max={100}
					value={volume}
					onChange={(e) => setVolume(+e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Controls;
