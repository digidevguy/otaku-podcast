import { FaAmazon, FaApple, FaPodcast, FaRss, FaSpotify } from 'react-icons/fa';
import { SiGooglepodcasts } from 'react-icons/si';

export const podcast = [
	{
		label: 'Spotify',
		href: 'https://open.spotify.com/show/0Xbn3EZisScayjFW7pj6iQ',
		icon: <FaSpotify />,
	},
	{
		label: 'Apple Podcasts',
		href: 'https://podcasts.apple.com/us/podcast/elevatedxotaku/id1662396170',
		icon: <FaApple />,
	},
	{
		label: 'Google Podcasts',
		href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yMTA0OTczLnJzcw==',
		icon: <SiGooglepodcasts />,
	},
	{
		label: 'RSS',
		href: 'https://podcastindex.org/podcast/5942060',
		icon: <FaRss />,
	},
	{
		label: 'Overcast.fm',
		href: 'https://overcast.fm/login',
		icon: <FaPodcast />,
	},
	{
		label: 'Amazon Music',
		href: 'https://music.amazon.com/podcasts/4a592381-675f-43d5-9bb8-ea248838dddb/elevatedxotaku',
		icon: <FaAmazon />,
	},
];
