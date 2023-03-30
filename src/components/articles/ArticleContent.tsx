import {
	Flex,
	Heading,
	Image,
	Link,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { format } from 'date-fns';
import { useEffect } from 'react';
import ReadButton from './ReadButton';

interface ArticleContentProps {
	title: string;
	image: string;
	createdAt: string;
	id: number;
}

const ArticleContent = ({
	title,
	image,
	createdAt,
	id,
}: ArticleContentProps) => {
	useEffect(() => console.log(image), [image]);

	return (
		<Flex
			flexDir='column'
			border={useColorModeValue('none', '1px')}
			borderColor={useColorModeValue('none', 'gray.600')}
			pos='relative'
			rounded='lg'
			overflow='hidden'
			boxShadow={useColorModeValue('md', 'none')}
		>
			<Image src={`http://localhost:1337${image}`} alt={title} />
			<Flex flexDir='column' alignSelf='start' gap={2} p={4} w='full'>
				<Flex flexDir='column'>
					<Link as={NextLink} href={`/anime/${id}`}>
						<Heading textAlign='left'>{title}</Heading>
					</Link>
					<Text>{format(new Date(createdAt), 'MMMM do yyyy')}</Text>
				</Flex>
				<ReadButton id={id} />
			</Flex>
		</Flex>
	);
};

export default ArticleContent;
