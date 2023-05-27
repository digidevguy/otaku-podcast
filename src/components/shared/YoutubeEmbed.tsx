import { Box, Flex } from '@chakra-ui/react';
type YoutubeEmbedProps = {
	embedId: string;
};

const YoutubeEmbed = ({ embedId }: YoutubeEmbedProps) => (
	<Box
		overflow='hidden'
		pos='relative'
		w='full'
		pb='56.25%'
		minW={['full', null, '300px']}
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
);

export default YoutubeEmbed;
