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
				{/* <link
					href='https://fonts.googleapis.com/css2?family=Roboto&family=Signika&display=swap'
					rel='stylesheet'
				/> */}
				{/* <link
					href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&family=Poppins:wght@300&display=swap'
					rel='stylesheet'
				/> */}
				{/* <link
					href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap'
					rel='stylesheet'
				/> */}
				<link
					href='https://fonts.googleapis.com/css2?family=Carter+One&family=Rubik:wght@300;400;500&display=swap'
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
