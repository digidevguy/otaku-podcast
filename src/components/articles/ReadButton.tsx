import { Button, useColorModeValue } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

type ReadButtonProps = {
	id: number;
};

const ReadButton = ({ id }: ReadButtonProps) => {
	const router = useRouter();
	return (
		<Button
			rightIcon={<ArrowForwardIcon />}
			bg={useColorModeValue('brand.400', 'gray.500')}
			color='white'
			_hover={{
				bg: useColorModeValue('black', 'white'),
				color: useColorModeValue('white', 'black'),
			}}
			onClick={() => router.push('/anime/[id]', `/anime/${id}`)}
		>
			Read More
		</Button>
	);
};

export default ReadButton;
