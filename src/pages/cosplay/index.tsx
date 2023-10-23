import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { NextPage } from 'next';
import CosplayForm from '@/components/cosplay/CosplayForm';
import Image from 'next/image';
import backgroundImg from '../../../public/assets/images/gracia-dharma-qTlbO6mkQH0-unsplash.jpg';

const CosplayPage: NextPage = () => {
	return (
		<Flex
			as='main'
			flexDir='column'
			align='center'
			pt={4}
			bg={useColorModeValue('brand.100', 'gray.800')}
			minH='80vh'
			gap={4}
		>
			<Heading as='h1' size='2xl'>
				Cosplay Images
			</Heading>
			<Flex
				as='section'
				pos='relative'
				p={[null, '75px', '150px']}
				my={10}
				rounded='md'
				overflow='hidden'
			>
				<Image
					src={backgroundImg}
					alt='Background Image'
					fill
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						objectFit: 'cover',
					}}
				/>
				<CosplayForm />
			</Flex>
		</Flex>
	);
};

export default CosplayPage;
