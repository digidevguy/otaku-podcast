import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Image } from '@/types';
import { getStrapiImages } from '@/utils';
import { Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';

// TODO create a media page that pulls in all the media from the database and displays it in a grid

export const getStaticProps: GetStaticProps = async () => {
	const { images } = await getStrapiImages();
	return {
		props: {
			images,
		},
		revalidate: 1,
	};
};

const GalleryPage: NextPage<{ images: Image[] }> = ({ images }) => {
	return (
		<Flex flexDir='column' align='center' p={4} minH='80vh'>
			<Heading my={3}>Media Page</Heading>
			<GalleryGrid images={images} />
		</Flex>
	);
};

export default GalleryPage;
