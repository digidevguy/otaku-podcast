import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import avatarPic from '../../../public/assets/images/avatar + logo.jpg';

const IntroSection = () => {
	return (
		<Flex className='intro' py={10} px={5}>
			<Text maxW={['full', '75%', '50%']} alignSelf='center' mx='auto'>
				Whether you’re looking for a podcast that seamlessly blends life lessons
				with your favorite anime, recommendations for your next binge session,
				cosplay inspiration, or simply a community of like-minded nerds and
				geeks - you’ve come to the right place!
			</Text>
			<Image src={avatarPic} alt='avatar' />
		</Flex>
	);
};

export default IntroSection;
