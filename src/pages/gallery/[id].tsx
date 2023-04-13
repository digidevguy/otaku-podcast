import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Image, IParams } from '@/types';
import { getStrapiImage, getStrapiImages } from '@/utils';

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
	console.log(image);
	return (
		<div>
			<h1>Image Preview Page</h1>
		</div>
	);
};

export default ImagePreviewPage;
