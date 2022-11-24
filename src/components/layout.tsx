import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>Servito</title>
				<meta name="description" content="Servito" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main className="Servito__main">
				{children}
				<Footer />
			</Main>
		</>
	);
}

const Main = styled.main`
	width: 100%;
	height: 100%;
`;
