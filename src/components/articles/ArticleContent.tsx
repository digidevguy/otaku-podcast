import {
	Box,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { format } from 'date-fns';
import { useEffect } from 'react';

interface ArticleContentProps {
	title: string;
	content: string;
	image: string;
	createdAt: string;
	id: number;
}

const ArticleContent = ({
	title,
	content,
	image,
	createdAt,
	id,
}: ArticleContentProps) => {
	useEffect(() => console.log(image), [image]);

	return (
		<Flex
			flexDir='column'
			gap={3}
			border='1px solid'
			borderColor='gray.200'
			pos='relative'
			rounded='lg'
			overflow='hidden'
		>
			{/* <Box boxSize='lg'> */}
			<Image src={`http://localhost:1337${image}`} alt={title} />
			{/* </Box> */}
			<VStack p={4}>
				<Flex flexDir='column' alignSelf='start'>
					<Link as={NextLink} href={`/anime/${id}`}>
						<Heading>{title}</Heading>
					</Link>
					<Text>{format(new Date(createdAt), 'MMMM do yyyy')}</Text>
				</Flex>
				<Divider w='40%' alignSelf='start' />
				<Text whiteSpace='pre-wrap' noOfLines={[3, 3]}>
					{content}
				</Text>
			</VStack>
		</Flex>
	);
};

export default ArticleContent;
