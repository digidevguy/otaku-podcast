import { Track } from '@/types';
import {
	Stack,
	Heading,
	Image,
	Box,
	useColorModeValue,
} from '@chakra-ui/react';

type SinglePodPlayerProps = {
	track: Track;
};

const SinglePodPlayer = ({ track }: SinglePodPlayerProps) => {
	return (
		<Stack
			direction={['column', null, 'row']}
			spacing={4}
			p={4}
			boxShadow='md'
			rounded={20}
			borderColor='gray.100'
			// w={['full', null, '80%']}
			w={['full', null, 'xl']}
			bg={useColorModeValue('brand.300', 'gray.700')}
		>
			<Box
				w={['200px', null, '150px']}
				rounded={10}
				overflow='hidden'
				alignSelf='center'
			>
				<Image src={track.artwork_url} alt={track.title} />
			</Box>
			<Stack direction='column' justify='space-around' w='full'>
				<Heading size={['sm', null, 'sm']}>{track.title}</Heading>
				<Box>
					<audio style={{ width: '100%' }} src={track.audio_url} controls />
				</Box>
			</Stack>
		</Stack>
	);
};

export default SinglePodPlayer;
