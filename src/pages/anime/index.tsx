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
import thinkingAvatar from '../../../public/assets/images/gestures/think_pose_resized.png';
import SpeakingAvatar from '@/components/shared/SpeakingAvatar';
import ComingSoon from '@/components/shared/ComingSoon';

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
					{/* <ComingSoon /> */}
					<SpeakingAvatar
						avatar={thinkingAvatar}
						content='Not sure what to watch next? Check out these anime recommendations!'
						alt='Thinking avatar'
					/>

					<Divider />
				</VStack>
				{!articles ? (
					[...Array(4)].map((_, i) => <LoadingCard key={i} />)
				) : (
					<SimpleGrid
						as='section'
						px={4}
						py={6}
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
