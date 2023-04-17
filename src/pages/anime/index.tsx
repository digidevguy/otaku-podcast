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
			<Flex flexDir='column' align='center'>
				<Box pos='relative' overflow='hidden' h={['250px', '350px']} w='full'>
					<Image
						src='/gracia-dharma-qTlbO6mkQH0-unsplash.jpg'
						alt='Anime pics'
						fill
						style={{ objectFit: 'cover' }}
					/>
					<Box
						bg='black'
						pos='absolute'
						top={0}
						bottom={0}
						right={0}
						left={0}
						opacity={0.35}
					/>
					<Heading
						color='white'
						pos='absolute'
						top='50%'
						left='25%'
						borderBottom='1px'
					>
						Anime Recommendations
					</Heading>
				</Box>
				<SimpleGrid px={4} py={16} spacing={4} maxW='1000px' columns={[1, 2]}>
					{articles.map((article) => (
						<ArticleCard
							key={article.id}
							id={article.id}
							title={article.attributes.title}
							image={article.attributes.image.data.attributes.url}
							createdAt={article.attributes.createdAt}
						/>
					))}
				</SimpleGrid>
			</Flex>
		</>
	);
};

export default BlogListPage;
