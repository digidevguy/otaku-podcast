import { Image } from '@/types';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import GalleryItem from './GalleryItem';

type GalleryGridProps = {
	images: Image[];
};

const GalleryGrid = ({ images }: GalleryGridProps) => {
	useEffect(() => console.log(images), [images]);

	return (
		<SimpleGrid minChildWidth='125px' w={['full', null, '1200px']} spacing={2}>
			{images.map((image) => (
				<GalleryItem key={image.id} image={image} />
			))}
		</SimpleGrid>
	);
};

export default GalleryGrid;
