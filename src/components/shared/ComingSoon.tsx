import {
	Box,
	Flex,
	Heading,
	Stack,
	Text,
	useBreakpointValue,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import darkTriangle from '../../../public/assets/shapes/dark-triangle.png';
import whiteTriangle from '../../../public/assets/shapes/white-triangle.png';
import embarrasedAvatar from '../../../public/assets/images/gestures/embarrased_smile_resized.png';

const ComingSoon = () => {
	const { colorMode } = useColorMode();
	const sideBubbleDisplay = useBreakpointValue({ base: 'none', md: 'block' });
	const bottomBubbleDisplay = useBreakpointValue({ base: 'block', md: 'none' });

	return (
		<Stack
			as='section'
			direction={['column', null, 'row']}
			spacing={6}
			align='center'
			justify='center'
		>
			<Flex pos='relative' maxW={['full', null, '50%']}>
				<Heading
					as='h2'
					p={6}
					size={['sm', 'md']}
					bg={useColorModeValue('white', 'gray.700')}
					rounded='md'
					zIndex={1}
					textAlign='center'
				>
					Don&apos;t worry!
					<br />
					It&apos;s coming soon!
				</Heading>
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
					right={135}
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
			<Box w='50%' maxH='2xl' overflow='hidden'>
				<Image src={embarrasedAvatar} alt='Embarrased Avatar' priority />
			</Box>
		</Stack>
	);
};

export default ComingSoon;
