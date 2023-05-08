import HeroSection from '@/components/landing/Hero';
import IntroSection from '@/components/landing/Intro';
import Recommendations from '@/components/landing/Recommendations';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

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
				<HeroSection />
				<IntroSection />
				{/* <Recommendations /> */}
			</Flex>
		</>
	);
}
