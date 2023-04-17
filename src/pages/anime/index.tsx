import { Article } from '@/types';
import { getArticles } from '@/utils';
import Image from 'next/image';
import { Box, Flex, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import ArticleCard from '@/components/articles/ArticleCard';

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
			<Flex flexDir='column' align='center' minH='80vh'>
				<Heading as='h1' size='2xl' py={10}>
					Anime Recommendations
				</Heading>
				<SimpleGrid
					px={4}
					py={16}
					spacing={4}
					maxW='1000px'
					columns={[1, null, 2]}
				>
					{articles.map((article) => (
						<ArticleCard
							key={article.id}
							id={article.id}
							title={article.attributes.title}
							content={article.attributes.content}
							createdAt={article.attributes.createdAt}
						/>
					))}
				</SimpleGrid>
			</Flex>
		</>
	);
};

export default BlogListPage;
