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
					href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<ColorModeScript initialColorMode='light' />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
