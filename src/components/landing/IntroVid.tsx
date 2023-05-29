import { Box, Container, Flex, Heading, VStack } from '@chakra-ui/react';

const IntroVid = () => {
	return (
		<Container py={[10, null, 16]}>
			<Heading as='h2' mb={5} textAlign='center'>
				ExO Podcast Trailer
			</Heading>
			<Box overflow='hidden' pos='relative' pb='56.25%' rounded={10}>
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
		</Container>
	);
};

export default IntroVid;