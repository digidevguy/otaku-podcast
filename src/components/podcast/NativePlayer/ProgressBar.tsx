import {
	Flex,
	Input,
	Progress,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from '@chakra-ui/react';

type ProgressBarProps = {
	audioRef: React.MutableRefObject<HTMLAudioElement | null>;
	progressBarRef: React.MutableRefObject<HTMLInputElement | null>;
	timeProgress: number;
	duration: any;
};

const ProgressBar = ({
	audioRef,
	progressBarRef,
	timeProgress,
	duration,
}: ProgressBarProps) => {
	const handleProgressChange = () => {
		audioRef.current!.currentTime = +progressBarRef.current!.value;
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
	};

	return (
		<Flex className='progress' gap={4} p={2}>
			<span className='time current'>{formatTime(timeProgress)}</span>
			<Slider
				// ref={progressBarRef}
				value={+progressBarRef.current?.value!}
				onChange={handleProgressChange}
				defaultValue={0}
				// max={+progressBarRef.current?.max!}
			>
				<SliderTrack>
					<SliderFilledTrack />
				</SliderTrack>
				<SliderThumb />
			</Slider>
			{/* <input
				type='range'
				ref={progressBarRef}
				defaultValue={'0'}
				onChange={handleProgressChange}
			/> */}
			<span className='time'>{formatTime(duration)}</span>
		</Flex>
	);
};

export default ProgressBar;
