import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Recommendations = () => {
	return (
		<Flex flexDir='column' align='center' p={4} gap={2}>
			<Heading>Have an idea or recommendation? I want to know!</Heading>
			<Text maxW='50%' alignSelf='center'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</Text>
			<Link href='/contact' passHref>
				<Button>Contact Me</Button>
			</Link>
		</Flex>
	);
};

export default Recommendations;
