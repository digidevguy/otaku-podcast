import { Divider, Stack, useColorModeValue } from '@chakra-ui/react';
import ContentCard from './ContentCard';

const CallToAction = () => {
	const maxW = [null, '45%', '35%'];

	return (
		<Stack
			direction={['column', 'row']}
			justify='center'
			align='center'
			spacing={4}
			p={4}
			bg={useColorModeValue('brand.600', 'gray.900')}
			py={12}
		>
			<ContentCard
				title='Have an idea or recommendation?'
				content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				buttonLink='/contact'
				buttonText='Contact me'
			/>

			<Divider
				display={['none', 'inherit']}
				orientation='vertical'
				w={1}
				h='10vh'
			/>
			<ContentCard
				title='Want to see more? Check out my podcasts!'
				content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				buttonLink='/podcast'
				buttonText='Listen to Podcast'
			/>
		</Stack>
	);
};

export default CallToAction;
