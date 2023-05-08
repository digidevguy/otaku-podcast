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
import {
	ButtonGroup,
	Flex,
	IconButton,
	Slider,
	SliderThumb,
	SliderFilledTrack,
	SliderTrack,
} from '@chakra-ui/react';
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
		progressBarRef.current.value = currentTime!;
		progressBarRef.current.style.setProperty(
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
		<Flex flexDir='column' gap={3}>
			<ButtonGroup alignSelf='center' p={2} variant='ghost'>
				<IconButton
					icon={<IoPlaySkipBackSharp />}
					aria-label='Skip to previous'
					onClick={handlePrev}
				/>
				<IconButton
					icon={<IoPlayBackSharp />}
					aria-label='Skip backward'
					onClick={skipBack}
				/>
				<IconButton
					icon={isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
					aria-label={isPlaying ? 'Pause' : 'Play'}
					onClick={togglePlaying}
				/>
				<IconButton
					icon={<IoPlayForwardSharp />}
					aria-label='Skip forward'
					onClick={skipForward}
				/>
				<IconButton
					icon={<IoPlaySkipForwardSharp />}
					aria-label='Skip to next'
					onClick={handleNext}
				/>
			</ButtonGroup>
			<Flex gap={4} p={2}>
				<IconButton
					variant='ghost'
					icon={
						muteVolume || volume < 5 ? (
							<IoVolumeOff />
						) : volume < 40 ? (
							<IoVolumeLow />
						) : (
							<IoVolumeHigh />
						)
					}
					aria-label={muteVolume ? 'Unmute' : 'Mute'}
					onClick={() => setMuteVolume((prev) => !prev)}
				/>
				<Slider
					aria-label='Volume'
					min={0}
					max={100}
					defaultValue={60}
					value={volume}
					onChange={(val) => {
						setVolume(val);
					}}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</Flex>
		</Flex>
	);
};

export default Controls;
