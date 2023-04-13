import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Image, IParams } from '@/types';
import { getStrapiImage, getStrapiImages, imageLoader } from '@/utils';
import NextImage from 'next/image';
import { Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

export const getStaticPaths: GetStaticPaths = async () => {
	const { images }: { images: Image[] } = await getStrapiImages();

	const paths = images.map((image: Image) => ({
		params: { id: image.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params as IParams;

	const { image }: { image: Image } = await getStrapiImage(id);

	return {
		props: {
			image,
		},
		revalidate: 1,
	};
};

const ImagePreviewPage: NextPage<{ image: Image }> = ({ image }) => {
	return (
		<Flex flexDir='column' p={4} minH='100vh' align='center' justify='center'>
			<Flex flexDir='column' gap={4} align='center'>
				<Flex
					position='relative'
					overflow='hidden'
					rounded={15}
					maxW={['full', null, '1500px']}
				>
					<NextImage
						loader={imageLoader}
						src={image.attributes.img.data.attributes.url}
						alt={image.attributes.name}
						width={image.attributes.img.data.attributes.width}
						height={image.attributes.img.data.attributes.height}
						priority
					/>
				</Flex>
				<Heading>{image.attributes.name}</Heading>
				<Link href='/gallery' passHref>
					<Button
						variant='outline'
						_hover={{
							bg: useColorModeValue('black', 'white'),
							color: useColorModeValue('white', 'black'),
						}}
					>
						Back to gallery
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default ImagePreviewPage;
