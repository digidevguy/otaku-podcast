import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const social = [
	{
		label: 'Twitter',
		href: 'https://twitter.com/',
		icon: <FaTwitter />,
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/',
		icon: <FaFacebook />,
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/',
		icon: <FaInstagram />,
	},
	{
		label: 'Email',
		url: 'mailto:test@test.com',
		icon: <FaEnvelope />,
	},
];
