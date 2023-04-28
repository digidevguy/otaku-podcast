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
		<div className='progress'>
			<span className='time current'>{formatTime(timeProgress)}</span>
			<input
				type='range'
				ref={progressBarRef}
				defaultValue={'0'}
				onChange={handleProgressChange}
			/>
			<span className='time'>{formatTime(duration)}</span>
		</div>
	);
};

export default ProgressBar;
