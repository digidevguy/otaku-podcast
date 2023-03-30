import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

const Player = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src =
			'https://www.buzzsprout.com/2104973.js?container_id=buzzsprout-large-player&player=large';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return <Box id='buzzsprout-large-player' w='full' />;
};

export default Player;
