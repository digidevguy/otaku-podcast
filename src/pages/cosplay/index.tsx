import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import ComingSoon from '@/components/shared/ComingSoon';
import { NextPage } from 'next';

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
			<ComingSoon />
		</Flex>
	);
};

export default CosplayPage;
