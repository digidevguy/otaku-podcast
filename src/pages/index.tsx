import Recommendations from '@/components/landing/Recommendations';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Elevated x Otaku</title>
				<meta name='description' content='Welcome to Elevated x Otaku' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Flex flexDir='column'>
				<Image
					src='/senad-palic-Qcefx5xENeA-unsplash.jpg'
					alt='banner image of anime portraits'
					width={5751}
					height={3834}
				/>
				<Heading>Elevated x Otaku</Heading>
				<Text maxW='50%' alignSelf='center'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Text>
				<Recommendations />
			</Flex>
		</>
	);
}
