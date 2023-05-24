import HeroSection from '@/components/landing/Hero';
import IntroSection from '@/components/landing/Intro';
import CallToAction from '@/components/landing/CallToAction';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.400)',
		'linear(to-b,brand.700,brand.900)'
	);
	return (
		<>
			<Head>
				<title>Elevated x Otaku</title>
				<meta name='description' content='Welcome to Elevated x Otaku' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Flex flexDir='column' bgGradient={bgGradient}>
				<HeroSection />
				<IntroSection />
				<CallToAction />
			</Flex>
		</>
	);
}
