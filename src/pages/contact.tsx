import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Textarea,
	useColorModeValue,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

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
		<Flex minH='80vh' justify='center' pt={20} px={4}>
			<VStack as='form' onSubmit={handleSubmit} spacing={4}>
				<Heading>Send me a message</Heading>
				<Flex flexDir={['column', null, 'row']} gap={2}>
					<FormControl isInvalid={formData.emailInvalid}>
						<FormLabel>Email</FormLabel>
						<Input name='email' value={email} onChange={handleInputChange} />
						<FormErrorMessage>{formData.errors.email}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={formData.subjectInvalid}>
						<FormLabel>Subject</FormLabel>
						<Select
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
				</Flex>
				<FormControl isInvalid={formData.contentInvalid}>
					<FormLabel>Message</FormLabel>
					<Textarea
						name='content'
						value={content}
						onChange={handleInputChange}
					/>
					<FormErrorMessage>{formData.errors.content}</FormErrorMessage>
				</FormControl>
				{/* TODO: Adjust button styling */}
				<Button
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
	);
};

export default ContactPage;
