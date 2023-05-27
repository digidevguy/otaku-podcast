import {
	Button,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
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
			rounded='md'
			py={8}
			px={4}
			bg={useColorModeValue('brand.400', 'gray.700')}
			boxShadow='sm'
		>
			<Heading as='h2' size='md'>
				{title}
			</Heading>
			<Text fontSize='sm' maxW='sm'>
				{content}
			</Text>
			<Link href={buttonLink} passHref>
				<Button>{buttonText}</Button>
			</Link>
		</Stack>
	);
};

export default ContentCard;
