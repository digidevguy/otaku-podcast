import { Image } from '@/types';
import { Flex, Image as ChakraImage } from '@chakra-ui/react';
import { useEffect } from 'react';

type GalleryItemProps = {
	image: Image;
};

const GalleryItem = ({ image }: GalleryItemProps) => {
	useEffect(() => console.log(image), [image]);

	return (
		<Flex overflow='hidden' maxH='200px'>
			<ChakraImage
				src={`http://localhost:1337${image.attributes.img.data.attributes.url}`}
				alt={image.attributes.name}
				objectFit='cover'
			/>
		</Flex>
	);
};

export default GalleryItem;
