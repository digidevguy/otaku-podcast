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
import { set } from 'date-fns';

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
		emailInvalid: false,
		subjectInvalid: false,
		contentInvalid: false,
	});
	const { email, subject, content } = formData;

	const [loading, setLoading] = useState<boolean>(false);
	const toast = useToast();
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.300)',
		'none'
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
			[`${name}Invalid`]: false,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
		setLoading(true);

		setFormData({
			...formData,
			emailInvalid: false,
			subjectInvalid: false,
			contentInvalid: false,
		});

		// const email = formData.email.trim();
		// const subject = formData.subject.trim();
		// const content = formData.content.trim();

		if (!email) {
			setFormData({
				...formData,
				emailInvalid: true,
			});
			setLoading(false);
			return;
		}

		if (!email.includes('@')) {
			setFormData({
				...formData,

				emailInvalid: true,
			});
			setLoading(false);
			return;
		}

		if (!subject) {
			setFormData({
				...formData,

				subjectInvalid: true,
			});
			setLoading(false);
			return;
		}

		if (!content) {
			setFormData({
				...formData,

				contentInvalid: true,
			});
			setLoading(false);
			return;
		}
		// TODO: Adjust validation logic and uncomment fetch request
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
			setFormData({
				email: '',
				subject: '',
				content: '',
				emailInvalid: false,
				subjectInvalid: false,
				contentInvalid: false,
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
		<Flex
			as='main'
			flexDir='column'
			justify='center'
			align='center'
			gap={4}
			px={4}
			minH='80vh'
			// bgGradient={bgGradient}
			bg={useColorModeValue('brand.100', 'gray.800')}
		>
			<Heading>Send me a message!</Heading>
			<Flex
				as='section'
				pos='relative'
				p={[null, 12, 20]}
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
					bg={useColorModeValue('gray.300', 'gray.600')}
					py={6}
					px={6}
					maxW={['full', null, 'lg']}
					rounded='md'
				>
					<FormControl isInvalid={formData.emailInvalid}>
						<FormLabel>Email</FormLabel>
						<Input
							variant='filled'
							name='email'
							value={email}
							onChange={handleInputChange}
						/>
						<FormErrorMessage>
							Email is invalid, please try again.
						</FormErrorMessage>
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
						<FormErrorMessage>Subject must not be blank.</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={formData.contentInvalid}>
						<FormLabel>Message</FormLabel>
						<Textarea
							variant='filled'
							name='content'
							value={content}
							onChange={handleInputChange}
						/>
						<FormErrorMessage>Please include a message.</FormErrorMessage>
					</FormControl>
					<Button
						w='200px'
						bg={useColorModeValue('brand.300', 'gray.500')}
						type='submit'
						variant={useColorModeValue('outline', 'solid')}
						// color='white'
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
