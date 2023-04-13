import { Article, Image } from '@/types';

interface AProps {
	data: Article;
}

/**
 * Get full Straph URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = '') {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://0.0.0.0:1337'
	}${path}`;
}

export function getStrapiMedia(url = '') {
	const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
	return imageUrl;
}

export async function getArticles() {
	const res = await fetch('http://0.0.0.0:1337/api/articles?populate=image');

	const articles = await res.json();
	return { articles: articles.data, count: articles.meta.pagination.total };
}

export async function getArticle(id: string) {
	const res = await fetch(
		`http://0.0.0.0:1337/api/articles/${id}?populate=image`
	);

	const article: AProps = await res.json();
	return { article: article.data };
}

export async function getStrapiImages() {
	const res = await fetch(getStrapiURL('/api/photos?populate=*'));

	const data = await res.json();
	return { images: data.data };
}

export async function getStrapiImage(id: string) {
	const res = await fetch(getStrapiURL(`/api/photos/${id}?populate=*`));

	const data = await res.json();
	return { image: data.data };
}

export const imageLoader = ({
	src,
	width,
	quality,
}: {
	src: string;
	width: number;
	quality?: number;
}) => {
	return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
};
