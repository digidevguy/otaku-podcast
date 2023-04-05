import { useForm } from '@/hooks/useForm';
import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
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
import { useState } from 'react';

const subjectOptions = [
	{
		value: 'podcast-question',
		label: 'Podcast Topic / Question of the Day Suggestions',
	},
	{
		value: 'podcast-collab-guest',
		label: 'Podcast Collaborations / Guest Suggestions',
	},
	{ value: 'endorsements', label: 'Brand or Product Endorsements' },
	{ value: 'anime', label: 'Anime recommendation' },
	{ value: 'business', label: 'Business inquiry' },
];

const ContactPage: NextPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		subject: '',
		content: '',
		errors: { email: '', subject: '', content: '' },
		emailValid: false,
		subjectValid: false,
		contentValid: false,
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

		try {
			const res = await fetch('/api/contact-mail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			toast({
				title: 'Success',
				description: 'Your message has been sent',
				status: 'success',
				duration: 5000,
				isClosable: true,
			});
		} catch (error: any) {
			toast({
				title: 'Error',
				description: error.message,
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}
		setLoading(false);
	};

	return (
		<Flex minH='100vh' justify='center' align='center'>
			<VStack as='form' onSubmit={handleSubmit}>
				<Heading>Send us a message</Heading>
				<Flex flexDir={['column', null, 'row']} gap={2}>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input name='email' value={email} onChange={handleInputChange} />
						<FormErrorMessage>Email is required.</FormErrorMessage>
					</FormControl>
					<FormControl>
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
						<FormErrorMessage>Please select an option.</FormErrorMessage>
					</FormControl>
				</Flex>
				<FormControl>
					<FormLabel>Message</FormLabel>
					<Textarea
						name='content'
						value={content}
						onChange={handleInputChange}
					/>
					<FormErrorMessage>
						The message field cannot be empty.
					</FormErrorMessage>
				</FormControl>
				<Button
					type='submit'
					variant='outline'
					isLoading={loading}
					loadingText='Sending...'
				>
					Send
				</Button>
			</VStack>
		</Flex>
	);
};

export default ContactPage;
