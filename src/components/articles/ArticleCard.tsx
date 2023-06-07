import {
	Flex,
	Divider,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import ReadButton from './ReadButton';

interface ArticleCardProps {
	title: string;
	content: string;
	createdAt: string;
	id: number;
}

const ArticleCard = ({ title, content, createdAt, id }: ArticleCardProps) => {
	return (
		<Flex
			flexDir='column'
			bg={useColorModeValue('white', 'gray.700')}
			rounded='md'
			boxShadow={useColorModeValue('md', 'none')}
			maxW='lg'
			py={3}
			px={4}
		>
			<Flex flexDir='column'>
				<Heading>{title}</Heading>
				<Text>{format(new Date(createdAt), 'MMMM do yyyy')}</Text>
			</Flex>
			<Divider mt={2} borderColor={useColorModeValue('gray.700', 'gray.300')} />
			<Text noOfLines={3} my={2}>
				{content}
			</Text>
			<ReadButton id={id} />
		</Flex>
	);
};

export default ArticleCard;
