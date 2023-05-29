import { Divider, Stack, useColorModeValue } from '@chakra-ui/react';
import ContentCard from './ContentCard';

const cardContent = [
	{
		title: 'Have an idea or recommendation?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		buttonLink: '/contact',
		buttonText: 'Contact me',
		imgLink: '/assets/images/moreno-matkovic-MeVHb62hSqU-unsplash.jpg',
		imgWidth: 1920,
		imgHeight: 1080,
		imgAlt: 'Woman holding the Death Note',
	},
	{
		title: 'Want to see more? Check out my podcasts!',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		buttonLink: '/podcast',
		buttonText: 'Listen to Podcast',
		imgLink: '/assets/images/kadyn-pierce-49X42qrgUmQ-unsplash.jpg',
		imgWidth: 6000,
		imgHeight: 3376,
		imgAlt: 'A group of Demon Slayer figures',
	},
	{
		title: 'Check out my anime recommendations!',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		buttonLink: '/anime',
		buttonText: 'View Anime',
		imgLink: '/assets/images/scott-gummerson-_5Q1-ae44aw-unsplash.jpg',
		imgWidth: 3718,
		imgHeight: 2092,
		imgAlt: 'A sleeping Yamcha',
	},
];

const CallToAction = () => {
	return (
		<Stack
			direction={['column', null, 'row']}
			justify='center'
			align='center'
			spacing={4}
			p={4}
			bg={useColorModeValue('brand.400', 'gray.900')}
			py={12}
		>
			{cardContent.map((card) => (
				<ContentCard
					key={card.title}
					title={card.title}
					content={card.content}
					buttonLink={card.buttonLink}
					buttonText={card.buttonText}
					imgLink={card.imgLink}
					imgWidth={card.imgWidth}
					imgHeight={card.imgHeight}
					imgAlt={card.imgAlt}
				/>
			))}
		</Stack>
	);
};

export default CallToAction;
