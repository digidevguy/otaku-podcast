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
			border={useColorModeValue('1px', '1px')}
			borderColor={useColorModeValue('gray.200', 'gray.600')}
			bg={useColorModeValue('white', 'gray.700')}
			pos='relative'
			rounded='lg'
			boxShadow={useColorModeValue('md', 'none')}
			maxW='lg'
			alignItems='start'
			py={3}
			px={4}
		>
			<Flex flexDir='column'>
				<Heading>{title}</Heading>
				<Text>{format(new Date(createdAt), 'MMMM do yyyy')}</Text>
			</Flex>
			<Divider mt={2} borderColor={useColorModeValue('gray.700', 'gray.300')} />
			<Text px={2} noOfLines={3} my={2}>
				{content}
			</Text>
			<ReadButton id={id} />
		</Flex>
	);
};

export default ArticleCard;
