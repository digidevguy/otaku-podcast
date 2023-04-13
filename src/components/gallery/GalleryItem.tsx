import { Image } from '@/types';
import { Flex } from '@chakra-ui/react';
import NextImage from 'next/image';
import { imageLoader } from '@/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';

type GalleryItemProps = {
	image: Image;
};

const MotionFlex = motion(Flex);

const GalleryItem = ({ image }: GalleryItemProps) => {
	return (
		<Link href={`/gallery/${image.id}`} passHref>
			<MotionFlex
				position='relative'
				overflow='hidden'
				rounded={15}
				h='125px'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<NextImage
					loader={imageLoader}
					src={image.attributes.img.data.attributes.url}
					alt={image.attributes.name}
					// fill
					style={{ objectFit: 'contain' }}
					width={image.attributes.img.data.attributes.width}
					height={image.attributes.img.data.attributes.height}
					priority
				/>
			</MotionFlex>
		</Link>
	);
};

export default GalleryItem;
