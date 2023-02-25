import { Article } from '@/types';
import { getArticles } from '@/utils';
import { Heading, VStack } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async () => {
	const { articles }: { articles: Article[] } = await getArticles();

	return {
		props: {
			articles,
		},
		revalidate: 1,
	};
};

const BlogListPage: NextPage<{ articles: Article[] }> = ({ articles }) => {
	return (
		<>
			<Heading>Blog Page</Heading>
			<VStack>
				{articles.map((article) => (
					<Heading key={article.id}>{article.attributes.title}</Heading>
				))}
			</VStack>
		</>
	);
};

export default BlogListPage;
