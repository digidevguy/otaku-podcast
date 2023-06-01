import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

import swoop from '../../../public/assets/images/swoop.png';

const Intro = () => {
	return (
		<Flex
			as='section'
			bg={useColorModeValue('white', 'gray.800')}
			align='center'
			justify='center'
			py={6}
			px={3}
		>
			<Stack
				direction={['column-reverse', null, 'row']}
				// mx='auto'

				align='center'
				spacing={6}
			>
				<Stack align='center' maxW='md'>
					<Text
						fontFamily='Carter One, cursive'
						textAlign='center'
						fontSize={['sm', 'md', 'xl']}
						fontWeight={300}
					>
						Looking for a place that seamlessly blends life lessons with your
						favorite anime, recommendations for your next binge session, cosplay
						inspiration, or simply a community of like-minded nerds and geeks?
						<br />
						<br />
						You&apos;ve come to the right place!
					</Text>
					<Flex
						display={useColorModeValue('inherit', 'none')}
						w={['3xs', '2xs', 'xs']}
					>
						<Image src={swoop} alt='swoop' />
					</Flex>
				</Stack>
				<Box
					overflow='hidden'
					pos='relative'
					pb={['56.25%', null, '25%']}
					// pb='25%'
					rounded={10}
					w={['full', null, 'md']}
				>
					<iframe
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							height: '100%',
							width: '100%',
						}}
						width='560'
						height='315'
						src={`https://www.youtube.com/embed/-ZDe_yKN7PI`}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='Embedded youtube'
					/>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Intro;
