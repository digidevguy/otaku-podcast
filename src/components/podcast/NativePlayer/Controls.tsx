import {
	IoPlayBackSharp,
	IoPlayForwardSharp,
	IoPlaySkipBackSharp,
	IoPlaySkipForwardSharp,
	IoPlaySharp,
	IoPauseSharp,
} from 'react-icons/io5';
import { useEffect, useRef, useState, useCallback } from 'react';

type ControlsProps = {
	audioRef: React.MutableRefObject<HTMLAudioElement | null>;
	progressBarRef: React.MutableRefObject<HTMLInputElement | any>;
	duration: any;
	setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
};

const Controls = ({
	audioRef,
	progressBarRef,
	duration,
	setTimeProgress,
}: ControlsProps) => {
	const [isPlaying, setIsPlaying] = useState(false);
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

	useEffect(() => {
		if (isPlaying) {
			audioRef.current?.play();
			playAnimationRef.current = requestAnimationFrame(repeat);
		} else {
			audioRef.current?.pause();
		}
	}, [isPlaying, audioRef, repeat]);

	return (
		<div className='controls=wrapper'>
			<div className='controls'>
				<button>
					<IoPlaySkipBackSharp />
				</button>
				<button>
					<IoPlayBackSharp />
				</button>
				<button onClick={togglePlaying}>
					{isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
				</button>
				<button>
					<IoPlayForwardSharp />
				</button>
				<button>
					<IoPlaySkipForwardSharp />
				</button>
			</div>
		</div>
	);
};

export default Controls;
