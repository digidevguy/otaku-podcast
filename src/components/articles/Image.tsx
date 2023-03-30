import { getStrapiMedia, getStrapiURL } from '@/utils';
import NextImage from 'next/image';

const Image = ({ image }: any) => {
	const { alternativeText, width, height } = image.data.attributes;

	return <NextImage src={getStrapiMedia(image)} alt={alternativeText || ''} />;
};

export default Image;
