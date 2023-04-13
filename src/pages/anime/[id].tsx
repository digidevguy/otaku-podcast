import { Article } from '@/types';
import { getArticle, getArticles, imageLoader } from '@/utils';
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import format from 'date-fns/format';
import { IParams } from '@/types';

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
			<Flex flexDir='column'>
				<Flex
					align='center'
					borderBottom='1px'
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					flexDir={['column-reverse', null, 'row']}
				>
					<Flex w={['full', null, '50%']} flexDir='column' align='center'>
						<Flex maxW='500px' flexDir='column'>
							<Heading>{article.attributes.title}</Heading>
							<Text color='gray.500'>
								{format(
									new Date(article.attributes.createdAt),
									'MMMM do, yyyy'
								)}
							</Text>
						</Flex>
					</Flex>
					<Box w={['full', null, '50%']}>
						<Image
							loader={imageLoader}
							src={article.attributes.image.data.attributes.url}
							alt={article.attributes.title}
							width={article.attributes.image.data.attributes.width}
							height={article.attributes.image.data.attributes.height}
							priority
						/>
					</Box>
				</Flex>
				<Flex flexDir='column' p={2} maxW='850px' mx='auto'>
					<ReactMarkdown components={ChakraUIRenderer()} skipHtml>
						{article.attributes.content}
					</ReactMarkdown>
				</Flex>
			</Flex>
		</>
	);
}
