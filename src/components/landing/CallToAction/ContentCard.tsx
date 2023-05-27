import { Button, Heading, Stack, Text } from '@chakra-ui/react';
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
		<Stack dir='column' alignItems='center' maxW={[null, '45%', '35%']}>
			<Heading>{title}</Heading>
			<Text>{content}</Text>
			<Link href={buttonLink} passHref>
				<Button>{buttonText}</Button>
			</Link>
		</Stack>
	);
};

export default ContentCard;
