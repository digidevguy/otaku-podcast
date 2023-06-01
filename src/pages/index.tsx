import HeroSection from '@/components/landing/Hero';
import IntroSection from '@/components/landing/Intro';
import CallToAction from '@/components/landing/CallToAction';
import Head from 'next/head';
import IntroVid from '@/components/landing/IntroVid';
import { Flex, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
	return (
		<>
			<Head>
				<title>Elevated x Otaku</title>
				<meta name='description' content='Welcome to Elevated x Otaku' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Flex
				as='main'
				flexDir='column'
				bg={useColorModeValue('brand.100', 'gray.800')}
			>
				<HeroSection />
				{/* <IntroSection /> */}
				<IntroVid />
				<CallToAction />
			</Flex>
		</>
	);
}
