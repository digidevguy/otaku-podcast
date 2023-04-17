import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
	return (
		<Flex py={10} px={4} flexDir='column' maxW='1200px' mx='auto' minH='75vh'>
			<Flex flexDir='column' py={4} gap='1.25rem' mb={6}>
				<Heading as='h1'>About</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Text>
				<Button
					display={['none', 'inherit']}
					maxW={['25%', null, '30%']}
					colorScheme=' blue'
				>
					View Podcasts
				</Button>
			</Flex>
			<Flex flexDir='column' py={4} gap='1.25rem' mb={6}>
				<Heading>Why we started</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
					condimentum id venenatis a condimentum vitae sapien. Velit scelerisque
					in dictum non consectetur a erat. Feugiat scelerisque varius morbi
					enim. Tristique sollicitudin nibh sit amet commodo. Enim sit amet
					venenatis urna cursus eget nunc. Dignissim sodales ut eu sem integer
					vitae justo eget magna. Tortor aliquam nulla facilisi cras fermentum
					odio. Amet est placerat in egestas. Ut faucibus pulvinar elementum
					integer enim neque volutpat ac tincidunt. Phasellus faucibus
					scelerisque eleifend donec pretium vulputate. Non blandit massa enim
					nec dui nunc mattis. Sed viverra ipsum nunc aliquet bibendum enim
					facilisis gravida. Pellentesque diam volutpat commodo sed egestas.
					Semper feugiat nibh sed pulvinar proin gravida. Donec enim diam
					vulputate ut pharetra sit. Phasellus faucibus scelerisque eleifend
					donec pretium vulputate. At in tellus integer feugiat. Orci dapibus
					ultrices in iaculis nunc sed augue. Consectetur adipiscing elit ut
					aliquam purus sit.
				</Text>
				<Text>
					Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Et
					malesuada fames ac turpis. Consequat ac felis donec et odio. Non
					tellus orci ac auctor augue mauris. Pellentesque sit amet porttitor
					eget dolor morbi. Odio eu feugiat pretium nibh ipsum consequat nisl.
					Sed id semper risus in hendrerit gravida rutrum quisque. Id leo in
					vitae turpis massa sed elementum tempus. Massa id neque aliquam
					vestibulum morbi blandit cursus risus at. Turpis in eu mi bibendum
					neque egestas congue quisque. Erat velit scelerisque in dictum non
					consectetur a. Molestie nunc non blandit massa enim nec. Egestas
					pretium aenean pharetra magna ac placerat vestibulum lectus mauris.
					Aliquam id diam maecenas ultricies mi. Ut venenatis tellus in metus
					vulputate eu scelerisque felis imperdiet. Pellentesque elit
					ullamcorper dignissim cras.
				</Text>
			</Flex>
			<Flex flexDir='column' py={4}>
				<Heading>What to expect</Heading>
				{/* TODO: Add numbered list of what to expect from the podcast */}
			</Flex>
		</Flex>
	);
};

export default AboutPage;
