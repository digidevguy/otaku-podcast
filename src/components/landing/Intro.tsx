import { Box, Container, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import deathNotePic from '../../../public/assets/images/moreno-matkovic-MeVHb62hSqU-unsplash.jpg';
import Image from 'next/image';

const IntroSection = () => {
	return (
		<Flex
			as='section'
			pos='relative'
			// minH='41vw'
			flexDir={['column', 'row']}
			justifyContent='center'
			alignItems='center'
			pt={['10.133vw', 4]}
			py={4}
			maxW='1200px'
			mx='auto'
		>
			<Container
				pos={['static', 'relative']}
				w='full'
				maxW='88.88vw'
				display='grid'
				gridColumnGap={0}
				gridRowGap={0}
				gridTemplateRows='auto'
				gridAutoColumns='1fr'
				alignItems='center'
				mx='auto'
				mb={['6.4vw', '0']}
				px={[0, '6.4vw']}
			>
				<Grid
					maxW={[null, '36vw']}
					gridArea={[null, '1 / 2 / 2 / 1']}
					gridTemplateRows='min-content'
					gridTemplateColumns='1fr'
					gridAutoColumns='1fr'
					justifyItems='end'
					py={2}
				>
					<Heading
						as='h2'
						size='2xl'
						justifySelf='start'
						// mt='1.6vw'
						// mb='3vw'
						lineHeight='100%'

						// fontSize={['7vw', '2.916vw']}
					>
						Placeholder
					</Heading>
					<Text
						// maxW={[null, '28.6vw']}
						alignSelf='center'
						// mx='auto'
						lineHeight='125%'
						fontSize={[null, 'md']}
						py={4}
					>
						Whether you&apos;re looking for a podcast that seamlessly blends
						life lessons with your favorite anime, recommendations for your next
						binge session, cosplay inspiration, or simply a community of
						like-minded nerds and geeks - you&apos;ve come to the right place!
					</Text>
				</Grid>
				<Box
					display={['none', 'inherit']}
					gridArea={[null, '1 / 2 / 2 / 2']}
					justifySelf='end'
					w='40vw'
					height='auto'
					pos='relative'
					rounded={10}
					overflow='hidden'
					m={4}
				>
					<Image src={deathNotePic} alt='Death Note' />
				</Box>
			</Container>
			<Box display={['inherit', 'none']} w='100vw' pos='relative' height='full'>
				<Image src={deathNotePic} alt='Death Note' />
			</Box>
		</Flex>
	);
};

export default IntroSection;
