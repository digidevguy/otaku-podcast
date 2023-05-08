import { Track } from '@/types';
import {
	Divider,
	Stack,
	Text,
	Heading,
	Image,
	Flex,
	Box,
	Button,
} from '@chakra-ui/react';

type SinglePodPlayerProps = {
	track: Track;
};

const SinglePodPlayer = ({ track }: SinglePodPlayerProps) => {
	return (
		<Stack
			direction={['column', 'row']}
			spacing={4}
			p={4}
			boxShadow='sm'
			rounded={20}
			border='1px'
			borderColor='gray.100'
		>
			<Box
				w={['250px', '150px']}
				rounded={10}
				overflow='hidden'
				alignSelf='center'
			>
				<Image src={track.artwork_url} alt={track.title} />
			</Box>
			<Stack direction='column' justify='space-between' w='full'>
				<Heading size='md' textAlign='center'>
					{track.title}
				</Heading>
				<Text
					maxW={['xs', 'xl']}
					textAlign={['center', 'inherit']}
					noOfLines={3}
					whiteSpace='pre-wrap'
				>
					{track.description}
				</Text>
				<Box>
					<audio style={{ width: '100%' }} src={track.audio_url} controls />
				</Box>
				{/* <Flex h='50px' w='full'>
					<audio src={track.audio_url} />
					<Box
						h='50px'
						w='50%'
						bg='blue.700'
						justifyContent='center'
						alignItems='center'
					/>
					<Divider orientation='vertical' h='50px' bg='white' />
				</Flex> */}
			</Stack>
		</Stack>
	);
};

export default SinglePodPlayer;
