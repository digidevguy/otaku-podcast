import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Text,
	Textarea,
	useColorModeValue,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import backgroundImg from '../../public/assets/images/tokyoluv-CsMNgdHXzFs-unsplash.jpg';

const subjectOptions = [
	{
		value: 'podcast-question',
		label: 'Podcast Topic / Question of the Day Suggestions',
	},
	{
		value: 'podcast-collab-guest',
		label: 'Podcast Collaborations / Guest Inquiries',
	},
	{ value: 'endorsements', label: 'Brand or Product Endorsements' },
	{ value: 'general', label: 'General / Other' },
];

const ContactPage: NextPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		subject: '',
		content: '',
		errors: { email: '', subject: '', content: '' },
		emailInvalid: false,
		subjectInvalid: false,
		contentInvalid: false,
	});
	const { email, subject, content } = formData;

	const [loading, setLoading] = useState<boolean>(false);
	const toast = useToast();
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.400)',
		'linear(to-b,brand.700,brand.900)'
	);

	const handleInputChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
		setLoading(true);

		// const email = formData.email.trim();
		// const subject = formData.subject.trim();
		// const content = formData.content.trim();

		if (!email) {
			setFormData({
				...formData,
				errors: { ...formData.errors, email: 'Email is required' },
				// emailInvalid: true,
			});
			setLoading(false);
			return;
		}

		if (!email.includes('@')) {
			setFormData({
				...formData,
				errors: { ...formData.errors, email: 'Email is invalid' },
				emailInvalid: true,
			});
			setLoading(false);
			return;
		}

		if (!subject) {
			setFormData({
				...formData,
				errors: { ...formData.errors, subject: 'Subject is required' },
				subjectInvalid: true,
			});
			setLoading(false);
			return;
		}

		if (!content) {
			setFormData({
				...formData,
				errors: { ...formData.errors, content: 'Message is required' },
				contentInvalid: true,
			});
			setLoading(false);
			return;
		}
		// TODO: Adjust validation logic and uncomment fetch request
		// try {
		// 	const res = await fetch('/api/contact-mail', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(formData),
		// 	});

		// 	toast({
		// 		title: 'Success',
		// 		description: 'Your message has been sent',
		// 		status: 'success',
		// 		duration: 5000,
		// 		isClosable: true,
		// 	});
		// } catch (error: any) {
		// 	toast({
		// 		title: 'Error',
		// 		description: error.message,
		// 		status: 'error',
		// 		duration: 5000,
		// 		isClosable: true,
		// 	});
		// }
		setLoading(false);

		setFormData({
			email: '',
			subject: '',
			content: '',
			errors: { email: '', subject: '', content: '' },
			emailInvalid: false,
			subjectInvalid: false,
			contentInvalid: false,
		});
	};

	return (
		<Flex
			flexDir={['column', null, 'row']}
			justify='center'
			align='center'
			gap={4}
			p={[null, 4]}
			minH='80vh'
			bgGradient={bgGradient}
		>
			<Flex flexDir='column' maxW='md' p={2}>
				<Heading as='h2' size='xl' mb={2.5}>
					Title
				</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
					<br />
					<br />
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Text>
			</Flex>
			<Flex
				pos='relative'
				p={[null, 8, 16]}
				my={10}
				rounded='md'
				overflow='hidden'
			>
				<Image
					src={backgroundImg}
					alt=''
					fill
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						objectFit: 'cover',
					}}
				/>
				<VStack
					as='form'
					onSubmit={handleSubmit}
					spacing={4}
					zIndex={1}
					bg={useColorModeValue('white', 'gray.600')}
					py={6}
					px={6}
					maxW={['full', null, 'lg']}
				>
					<Heading>Send me a message</Heading>
					{/* <Flex flexDir={['column', null, 'row']} gap={2}> */}
					<FormControl isInvalid={formData.emailInvalid}>
						<FormLabel>Email</FormLabel>
						<Input
							variant='filled'
							name='email'
							value={email}
							onChange={handleInputChange}
						/>
						<FormErrorMessage>{formData.errors.email}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={formData.subjectInvalid}>
						<FormLabel>Subject</FormLabel>
						<Select
							variant='filled'
							name='subject'
							value={subject}
							onChange={handleInputChange}
							placeholder='Please select an option'
						>
							{subjectOptions.map((option) => (
								<option key={option.label} value={option.value}>
									{option.label}
								</option>
							))}
						</Select>
						<FormErrorMessage>{formData.errors.subject}</FormErrorMessage>
					</FormControl>
					{/* </Flex> */}
					<FormControl isInvalid={formData.contentInvalid}>
						<FormLabel>Message</FormLabel>
						<Textarea
							variant='filled'
							name='content'
							value={content}
							onChange={handleInputChange}
						/>
						<FormErrorMessage>{formData.errors.content}</FormErrorMessage>
					</FormControl>
					{/* TODO: Adjust button styling */}
					<Button
						bg={useColorModeValue('blue.400', 'blue.200')}
						w='xs'
						type='submit'
						variant={useColorModeValue('outline', 'solid')}
						color={useColorModeValue('black', 'white')}
						// bg={useColorModeValue('white', 'black')}
						isLoading={loading}
						loadingText='Sending...'
						_hover={{
							bg: useColorModeValue('black', 'white'),
							color: useColorModeValue('white', 'black'),
						}}
					>
						Send
					</Button>
				</VStack>
			</Flex>
		</Flex>
	);
};

export default ContactPage;
