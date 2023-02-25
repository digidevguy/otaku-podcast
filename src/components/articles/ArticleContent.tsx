import { Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface ArticleContentProps {
	title: string;
	date: string;
	content: string;
	image: string;
}

const ArticleContent = ({
	title,
	content,
	image,
	date,
}: ArticleContentProps) => {
	return (
		<Flex
			flexDir='column'
			gap={3}
			border='1px solid'
			borderColor='gray.200'
			p={2}
			pos='relative'
		>
			<Image src={`http://localhost:1337${image}`} alt={title} />
			<Heading>{title}</Heading>
			<Divider w='40%' />
			<Text whiteSpace='pre-wrap'>{content}</Text>
		</Flex>
	);
};

export default ArticleContent;
