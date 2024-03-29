import { Article } from '@/types';
import { getArticle, getArticles } from '@/utils';
import {
	Box,
	Flex,
	Heading,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import format from 'date-fns/format';
import { IParams } from '@/types';
import MarkdownRenderer from '@/components/shared/UIElements/MarkdownRenderer';

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
		revalidate: 86400,
	};
};

export default function BlogDetailPage({ article }: { article: Article }) {
	return (
		<Flex
			flexDir='column'
			alignItems='center'
			justifyContent='center'
			bg={useColorModeValue('brand.100', 'gray.800')}
		>
			<Flex
				align='center'
				borderBottom='1px'
				borderColor={useColorModeValue('gray.200', 'gray.700')}
				flexDir={['column-reverse', null, 'row']}
			>
				<VStack w={['full', null, '50%']} py={[3, null, 0]} px={[4, 2, null]}>
					<Flex maxW='500px' flexDir='column'>
						<Heading>{article.attributes.title}</Heading>
						<Text color='gray.500'>
							{format(new Date(article.attributes.createdAt), 'MMMM do, yyyy')}
						</Text>
					</Flex>
				</VStack>
				<Box w={['full', null, '50%']}>
					<Image
						src={article.attributes.image.data.attributes.url}
						alt={article.attributes.title}
						width={article.attributes.image.data.attributes.width}
						height={article.attributes.image.data.attributes.height}
						priority
					/>
				</Box>
			</Flex>
			<MarkdownRenderer content={article.attributes.content} />
		</Flex>
	);
}
