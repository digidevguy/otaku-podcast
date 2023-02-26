import { Article } from '@/types';
import { getArticles } from '@/utils';
import { SimpleGrid, VStack } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import ArticleContent from '@/components/articles/ArticleContent';

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
			<VStack p={4} spacing={4} maxW='850px' mx='auto'>
				{articles.map((article) => (
					<ArticleContent
						key={article.id}
						id={article.id}
						title={article.attributes.title}
						content={article.attributes.content}
						image={article.attributes.image.data.attributes.url}
						createdAt={article.attributes.createdAt}
					/>
				))}
			</VStack>
		</>
	);
};

export default BlogListPage;
