import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script&family=Dosis&family=Exo+2&family=Inconsolata&family=Indie+Flower&family=Lobster&family=Lora&family=Merriweather&family=Mukta&family=Nunito&family=Open+Sans&family=Oswald&family=Playfair+Display&family=Raleway&family=Roboto&family=Slabo+27px&family=Teko&family=Titillium+Web&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<ColorModeScript />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
