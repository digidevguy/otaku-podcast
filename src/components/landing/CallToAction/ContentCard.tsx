import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

type ContentCardProps = {
	title: string;
	content: string;
	buttonText: string;
	buttonLink: string;
};

const ContentCard = ({
	title,
	content,
	buttonText,
	buttonLink,
}: ContentCardProps) => {
	return (
		<Stack
			dir='column'
			alignItems='center'
			maxW={[null, 'md', 'md']}
			border='1px'
			borderColor='gray.200'
			rounded='md'
			py={8}
			px={4}
		>
			<Heading as='h2' size='md'>
				{title}
			</Heading>
			<Text fontSize='sm'>{content}</Text>
			<Link href={buttonLink} passHref>
				<Button>{buttonText}</Button>
			</Link>
		</Stack>
	);
};

export default ContentCard;
