import {
	Button,
	FormLabel,
	FormControl,
	Heading,
	Image,
	Input,
	Stack,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { set } from 'date-fns';
import { useState } from 'react';

export default function CosplayForm() {
	const [formData, setFormData] = useState({
		identifier: '',
		character: '',
		anime: '',
		image: null as string | ArrayBuffer | null | undefined,
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [sizeError, setSizeError] = useState<boolean>(false);
	const toast = useToast();

	function setImagePath(e: React.ChangeEvent<HTMLInputElement>) {
		setSizeError(false);
		const target = e.target as HTMLInputElement;
		const size = target.files?.[0].size;

		if (size && size > 1000000) {
			toast({
				title: 'Error',
				description: 'Image size is too large, file must be under 1MB.',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
			setSizeError(true);
			return;
		}
		const reader = new FileReader();

		if (!target.files) return;
		reader.readAsDataURL(target.files[0]);

		reader.onload = function () {
			setFormData({ ...formData, image: reader.result });
		};
	}

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement | HTMLDivElement>
	) {
		e.preventDefault();

		// if image is null, return error stating that image is required.
		if (!formData.image) {
			toast({
				title: 'Error',
				description: 'Image is required',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
			return;
		}

		// if image size is too large, return error stating that image size is too large.
		if (sizeError) {
			toast({
				title: 'Error',
				description: 'Image size is too large, must be under 1MB.',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
			return;
		}

		setIsLoading(true);

		try {
			const res = await fetch('/api/cosplay-mail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					image: formData.image,
					identifier: formData.identifier,
					character: formData.character,
					anime: formData.anime,
				}),
			});

			const data = await res.json();

			toast({
				title: 'Success!',
				description: 'Your submission has been sent',
				status: 'success',
				duration: 5000,
				isClosable: true,
			});
			setFormData({
				identifier: '',
				character: '',
				anime: '',
				image: '',
			});
		} catch (error: any) {
			console.error('error', error);

			toast({
				title: 'Error',
				description: error.message,
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Stack
			as='form'
			onSubmit={handleSubmit}
			direction='column'
			spacing={4}
			px={4}
			py={6}
			rounded='md'
			bg={useColorModeValue('gray.300', 'gray.600')}
			zIndex={1}
		>
			<Heading as='h2' size='md'>
				Cosplay Form
			</Heading>
			<FormControl id='identifier'>
				<FormLabel>Social media or name (first name only)</FormLabel>
				<Input
					variant='filled'
					type='text'
					value={formData.identifier}
					onChange={(e) =>
						setFormData({ ...formData, identifier: e.target.value })
					}
				/>
			</FormControl>
			<FormControl id='character'>
				<FormLabel>Character name</FormLabel>
				<Input
					variant='filled'
					type='text'
					name='character'
					value={formData.character}
					onChange={(e) =>
						setFormData({ ...formData, character: e.target.value })
					}
				/>
			</FormControl>
			<FormControl id='anime'>
				<FormLabel>Anime</FormLabel>
				<Input
					variant='filled'
					type='text'
					name='anime'
					value={formData.anime}
					onChange={(e) => setFormData({ ...formData, anime: e.target.value })}
				/>
			</FormControl>
			<FormControl id='image'>
				<FormLabel>Image</FormLabel>
				<Input
					variant='filled'
					p={1}
					type='file'
					name='image'
					onChange={setImagePath}
					justifyContent='center'
				/>
				{formData.image && (
					<Image
						// @ts-ignore: Unreachable code error
						src={formData.image}
						alt='cosplay image'
						maxW='xs'
						my={2}
						rounded='md'
						mx='auto'
					/>
				)}
			</FormControl>
			<Button
				type='submit'
				isDisabled={sizeError || isLoading}
				isLoading={isLoading}
				loadingText='Submitting...'
				bg={useColorModeValue('brand.300', 'gray.500')}
				variant={useColorModeValue('outline', 'solid')}
				_hover={{
					bg: useColorModeValue('black', 'white'),
					color: useColorModeValue('white', 'black'),
				}}
			>
				Submit
			</Button>
		</Stack>
	);
}
