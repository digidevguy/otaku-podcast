import { Track } from '@/types';
import { Icon, Image } from '@chakra-ui/react';
import { HiMusicNote } from 'react-icons/hi';

type DisplayTrackProps = {
	track: Track;
	audioRef: React.MutableRefObject<HTMLAudioElement | null>;
	progressBarRef: React.MutableRefObject<HTMLInputElement | null>;
	setDuration: React.Dispatch<React.SetStateAction<string>>;
	handleNext: () => void;
};

const DisplayTrack = ({
	track,
	audioRef,
	progressBarRef,
	setDuration,
	handleNext,
}: DisplayTrackProps) => {
	const onLoadedMetadata = () => {
		const seconds: string = audioRef.current?.duration.toString()!;
		setDuration(seconds!);
		progressBarRef.current!.max = seconds?.toString();
	};

	return (
		<div>
			<audio
				src={track.audio_url}
				ref={audioRef}
				onLoadedMetadata={onLoadedMetadata}
				onEnded={handleNext}
			/>
			<div className='image'>
				{track.artwork_url ? (
					<Image src={track.artwork_url} alt={track.title} boxSize='xs' />
				) : (
					<div>
						<Icon as={HiMusicNote} />
					</div>
				)}
			</div>
			<div className='track-info'>
				<p className='title'>{track.title}</p>
			</div>
		</div>
	);
};

export default DisplayTrack;
