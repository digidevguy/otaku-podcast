import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import AppLayout from '@/components/shared/layouts/AppLayout';
import theme from 'src/components/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ChakraProvider>
	);
}
