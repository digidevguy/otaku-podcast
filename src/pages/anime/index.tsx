import { Article } from '@/types';
import { getArticles } from '@/utils';
import {
	Divider,
	Flex,
	Heading,
	Text,
	SimpleGrid,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import ArticleCard from '@/components/articles/ArticleCard';
import LoadingCard from '@/components/shared/LoadingCard';
import { useEffect } from 'react';

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
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.400)',
		'linear(to-b,brand.700,brand.900)'
	);
	useEffect(() => console.log(articles), [articles]);

	return (
		<>
			<Flex as='section' flexDir='column' align='center' minH='80vh' px={2}>
				<VStack textAlign='center' spacing={4} pt={4}>
					<Heading as='h1' size='2xl'>
						Anime Recommendations
					</Heading>
					<Text>
						Not sure what to watch next? Check out these anime recommendations!
					</Text>
					<Divider />
				</VStack>
				{!articles ? (
					[...Array(4)].map((_, i) => <LoadingCard key={i} />)
				) : (
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
				)}
			</Flex>
		</>
	);
};

export default BlogListPage;
