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
		'linear(to-b,brand.100,brand.300)',
		'none'
	);

	return (
		<>
			<Flex
				as='main'
				flexDir='column'
				align='center'
				px={2}
				bg={useColorModeValue('brand.100', 'gray.800')}
				minH='80vh'
			>
				<VStack textAlign='center' spacing={4} pt={4}>
					<Heading as='h1' size='2xl'>
						Anime Recommendations
					</Heading>
					<Text px={2}>
						Not sure what to watch next? Check out these anime recommendations!
					</Text>
					<Divider />
				</VStack>
				{!articles ? (
					[...Array(4)].map((_, i) => <LoadingCard key={i} />)
				) : (
					<SimpleGrid
						as='section'
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
