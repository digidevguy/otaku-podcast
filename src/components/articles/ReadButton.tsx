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
			maxW='12vh'
			variant='outline'
			borderColor={useColorModeValue('black', 'white')}
			rightIcon={<ArrowForwardIcon />}
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
