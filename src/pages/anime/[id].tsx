import { Article } from '@/types';
import { getArticle, getArticles } from '@/utils';
import { Heading, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
	id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { articles }: { articles: Article[] } = await getArticles();

	const paths = articles.map((article: Article) => ({
		params: { id: article.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params as IParams;

	const { article }: { article: Article } = await getArticle(id);

	return {
		props: {
			article,
		},
		revalidate: 1,
	};
};

export default function BlogDetailPage({ article }: { article: Article }) {
	return (
		<>
			<Heading>Blog Detail Page</Heading>
			<Text>{article.attributes.title}</Text>
		</>
	);
}
