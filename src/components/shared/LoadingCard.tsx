import { SkeletonCircle, SkeletonText, VStack } from '@chakra-ui/react';

const LoadingCard = () => {
	return (
		<VStack w='lg' p={6} boxShadow='md'>
			<SkeletonCircle size='10' alignSelf='start' />
			<SkeletonText w='full' noOfLines={3} spacing='4' skeletonHeight={4} />
		</VStack>
	);
};

export default LoadingCard;
