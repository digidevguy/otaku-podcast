import {
	Box,
	Flex,
	Stack,
	Text,
	useBreakpointValue,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import darkTriangle from '../../../public/assets/shapes/dark-triangle.png';
import whiteTriangle from '../../../public/assets/shapes/white-triangle.png';
import matterOfFact from '../../../public/assets/images/gestures/matter_of_face_post_resized.png';

type SpeakingAvatarProps = {
	avatar: StaticImageData;
	content: string;
	alt: string;
};

const SpeakingAvatar = ({ avatar, content, alt }: SpeakingAvatarProps) => {
	const { colorMode } = useColorMode();
	const sideBubbleDisplay = useBreakpointValue({ base: 'none', md: 'block' });
	const bottomBubbleDisplay = useBreakpointValue({ base: 'block', md: 'none' });

	return (
		<Stack
			direction={['column', null, 'row']}
			spacing={6}
			align='center'
			justify='center'
		>
			<Flex pos='relative' maxW={['full', null, '30%']}>
				<Text
					p={3}
					fontSize={['sm', 'md']}
					bg={useColorModeValue('white', 'gray.700')}
					rounded='md'
					zIndex={1}
				>
					{content}
				</Text>
				<Box
					display={['none', null, 'block']}
					pos='absolute'
					top={45}
					right={-2}
					w={4}
					zIndex={0}
				>
					{colorMode === 'light' ? (
						<Image
							src={whiteTriangle}
							alt='Text Triangle'
							style={{
								display: sideBubbleDisplay,
								transform: 'rotate(-90deg)',
							}}
							priority
						/>
					) : (
						<Image
							src={darkTriangle}
							alt='Text Triangle'
							style={{
								display: sideBubbleDisplay,
								transform: 'rotate(-90deg)',
							}}
							priority
						/>
					)}
				</Box>
				<Box
					display={['block', null, 'none']}
					pos='absolute'
					right={225}
					bottom={-3}
					w={4}
					zIndex={0}
				>
					{colorMode === 'light' ? (
						<Image
							src={whiteTriangle}
							alt='Text Triangle'
							style={{
								display: bottomBubbleDisplay,
							}}
							priority
						/>
					) : (
						<Image
							src={darkTriangle}
							alt='Text Triangle'
							style={{
								display: bottomBubbleDisplay,
							}}
							priority
						/>
					)}
				</Box>
			</Flex>
			<Box w='25%' maxH='xl' overflow='hidden'>
				<Image src={avatar} alt={alt} priority />
			</Box>
		</Stack>
	);
};

export default SpeakingAvatar;
