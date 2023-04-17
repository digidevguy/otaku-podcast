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
			border={useColorModeValue('none', '1px')}
			borderColor={useColorModeValue('none', 'gray.600')}
			pos='relative'
			rounded='lg'
			overflow='hidden'
			boxShadow={useColorModeValue('md', 'none')}
			maxW='lg'
			alignItems='start'
			p={3}
		>
			<Flex flexDir='column'>
				<Heading textAlign='left'>{title}</Heading>
				<Text>{format(new Date(createdAt), 'MMMM do yyyy')}</Text>
			</Flex>
			<Divider />
			<Text px={2} noOfLines={3} my={4}>
				{content}
			</Text>
			<ReadButton id={id} />
		</Flex>
	);
};

export default ArticleCard;
