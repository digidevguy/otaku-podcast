import { Image } from '@/types';
import { SimpleGrid } from '@chakra-ui/react';
import GalleryItem from './GalleryItem';

type GalleryGridProps = {
	images: Image[];
};

const GalleryGrid = ({ images }: GalleryGridProps) => {
	return (
		<SimpleGrid minChildWidth='125px' w={['full', '75%']} spacing={2}>
			{images.map((image) => (
				<GalleryItem key={image.id} image={image} />
			))}
		</SimpleGrid>
	);
};

export default GalleryGrid;
