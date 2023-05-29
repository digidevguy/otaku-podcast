import {
	Button,
	Flex,
	Heading,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type ContentCardProps = {
	title: string;
	content: string;
	buttonText: string;
	buttonLink: string;
	imgLink: string;
	imgWidth: number;
	imgHeight: number;
	imgAlt: string;
};

const ContentCard = ({
	title,
	content,
	buttonText,
	buttonLink,
	imgLink,
	imgWidth,
	imgHeight,
	imgAlt,
}: ContentCardProps) => {
	return (
		<Flex
			flexDir='column'
			w={[null, 'sm', 'md']}
			rounded='md'
			// bg={useColorModeValue('brand.600', 'gray.700')}
			boxShadow='sm'
			overflow='hidden'
		>
			<Image src={imgLink} width={imgWidth} height={imgHeight} alt={imgAlt} />
			<VStack
				p={4}
				alignItems='center'
				justify={['center', null, 'space-around']}
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
			</VStack>
		</Flex>
	);
};

export default ContentCard;