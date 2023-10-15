import {
	Flex,
	Divider,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import ReadButton from './ReadButton';
import Image from 'next/image';

interface ArticleCardProps {
	title: string;
	content: string;
	createdAt: string;
	id: number;
	image: {
		data: {
			attributes: {
				width: number;
				height: number;
				url: string;
			};
		};
	};
}

const ArticleCard = ({
	title,
	content,
	createdAt,
	id,
	image,
}: ArticleCardProps) => {
	return (
		<Flex
			flexDir='column'
			bg={useColorModeValue('white', 'gray.700')}
			rounded='lg'
			boxShadow={useColorModeValue('md', 'none')}
			maxW='lg'
			overflow='hidden'
		>
			<Image
				src={image.data.attributes.url}
				width={image?.data.attributes.width}
				height={image?.data.attributes.height}
				alt={title}
			/>
			<Flex flexDir='column' py={3} px={4}>
				<Flex flexDir='column'>
					<Heading>{title}</Heading>
					<Text>{format(new Date(createdAt), 'MMMM do yyyy')}</Text>
				</Flex>
				<Divider
					mt={2}
					borderColor={useColorModeValue('gray.700', 'gray.300')}
				/>
				<Text noOfLines={3} my={2}>
					{content}
				</Text>
				<ReadButton id={id} />
			</Flex>
		</Flex>
	);
};

export default ArticleCard;
