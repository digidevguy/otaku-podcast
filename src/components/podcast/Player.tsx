import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

const Player = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src =
			'https://www.buzzsprout.com/2104973.js?container_id=buzzsprout-large-player&player=large';
		// script.src =
		// 	'https://www.buzzsprout.com/2104973?client_source=large_player&iframe=true&referrer=https%3A%2F%2Fwww.buzzsprout.com%2F2104973%2Fpodcast%2Fembed';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return (
		<Box
			id='buzzsprout-large-player'
			w={['90%', 'full']}
			rounded={10}
			overflow='hidden'
			maxW='1000px'
		/>
	);
};

export default Player;
