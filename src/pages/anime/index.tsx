import { Article } from '@/types';
import { getArticles } from '@/utils';
import Image from 'next/image';
import { Box, Flex, VStack, Text } from '@chakra-ui/react';
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
			<Flex flexDir='column' align='center'>
				<Box pos='relative' overflow='hidden' h={['250px', '350px']} w='full'>
					<Image
						src='/gracia-dharma-qTlbO6mkQH0-unsplash.jpg'
						alt='Anime pics'
						fill
						style={{ objectFit: 'cover' }}
					/>
				</Box>
				<Text p={2} maxW='1000px'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Text>
				<VStack p={4} spacing={4} maxW='850px'>
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
			</Flex>
		</>
	);
};

export default BlogListPage;
