import { Article } from '@/types';

interface AProps {
	data: Article;
}

export function getStrapiURL(path = '') {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
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
