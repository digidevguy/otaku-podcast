import { Track } from '@/types';
import { Box, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
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
		<Stack
			direction={['column', 'row']}
			spacing={4}
			align='center'
			p={2}
			w={['sm', 'lg', '2xl']}
		>
			<audio
				src={track.audio_url}
				ref={audioRef}
				onLoadedMetadata={onLoadedMetadata}
				onEnded={handleNext}
			/>
			<Box maxW='200px' rounded={10} overflow='hidden' alignSelf='center'>
				{track.artwork_url ? (
					<Image src={track.artwork_url} alt={track.title} />
				) : (
					<div>
						<Icon as={HiMusicNote} />
					</div>
				)}
			</Box>
			<Heading as='h2' size='lg' textAlign='center'>
				{track.title}
			</Heading>
		</Stack>
	);
};

export default DisplayTrack;
