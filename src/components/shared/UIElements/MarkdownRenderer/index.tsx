import {
	Container,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	ListItem,
	OrderedList,
	Table,
	TableContainer,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	UnorderedList,
	useMediaQuery,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function MarkdownRenderer({ content }: { content: string }) {
	const [isLessThan780px] = useMediaQuery('(max-width: 780px)');

	return (
		<Container maxW='container.md' pb={[6, 0, null]}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				// @ts-expect-error
				rehypePlugins={[rehypeRaw]}
				components={{
					h1: Heading,
					h2: (props) => <Heading my={6} size='lg' {...props} />,
					h3: (props) => <Heading my={4} size='md' {...props} />,
					p: (props) => (
						<Text my={4} lineHeight={1.3} whiteSpace='pre-line' {...props} />
					),
					ul: (props) => <UnorderedList my={4} {...props} />,
					ol: (props) => <OrderedList my={4} {...props} />,
					li: ListItem,
					hr: Divider,
					a: (props) => (
						<Link href={props.href} color='blue.500' isExternal>
							{props.children}
						</Link>
					),
					img: (props) => (
						<Image
							src={props.src}
							alt={props.alt}
							htmlWidth='50%'
							htmlHeight='auto'
							my={8}
							alignSelf='center'
							justifySelf='center'
							rounded='lg'
							boxShadow='lg'
							border='1px solid'
							borderColor='gray.300'
							mx='auto'
							{...props}
						/>
					),
					table: (props) => (
						<TableContainer
							// w={isLessThan780px && '17rem'}
							overflow='scroll'
							whiteSpace='pre-wrap'
						>
							<Table my={4} variant='striped' colorScheme='gray' {...props} />
						</TableContainer>
					),
					thead: Thead,
					tbody: Tbody,
					tr: Tr,
					th: Th,
				}}
			>
				{content}
			</ReactMarkdown>
		</Container>
	);
}
