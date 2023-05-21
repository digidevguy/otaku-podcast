import { Button, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

const CallToAction = () => {
	const maxW = [null, '45%', '35%'];

	return (
		<Stack
			direction={['column', 'row']}
			mx='auto'
			justify='center'
			align='center'
			spacing={4}
			p={4}
		>
			<Stack dir='column' alignItems='center' maxW={maxW}>
				<Heading>Have an idea or recommendation? I want to know!</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
				<Link href='/contact' passHref>
					<Button>Contact Me</Button>
				</Link>
			</Stack>
			<Divider
				display={['none', 'inherit']}
				orientation='vertical'
				w={1}
				h='10vh'
			/>
			<Stack dir='column' alignItems='center' maxW={maxW}>
				<Heading>Want to see more? Check out my podcasts!</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
				<Link href='/podcast' passHref>
					<Button>Listen to Podcast</Button>
				</Link>
			</Stack>
		</Stack>
	);
};

export default CallToAction;
