import type { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import '../styles/globals.css';
import '../styles/layout.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
