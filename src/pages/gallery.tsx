import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Image } from '@/types';
import { getStrapiImages } from '@/utils';
import { Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

// TODO create a media page that pulls in all the media from the database and displays it in a grid

// export const getStaticProps: GetStaticProps = async () => {
// 	const { images, count } = getStrapiImages();
// 	return {
// 		props: {
// 			images,
// 			count,
// 		},
// 		revalidate: 1,
// 	};
// };

const GalleryPage: NextPage = () => {
	const [images, setImages] = useState<Image[]>([]);
	useEffect(() => {
		const fetchImages = async () => {
			const res = await fetch('http://localhost:1337/api/photos?populate=*');
			const data = await res.json();
			setImages(data.data);
		};
		fetchImages();
	}, []);

	return (
		<Flex flexDir='column' align='center' p={4}>
			<Heading my={3}>Media Page</Heading>
			<GalleryGrid images={images} />
		</Flex>
	);
};

export default GalleryPage;
