import Head from 'next/head';
import styled from 'styled-components';

import Navbar from './Navbar';

const AbsoluteBackground = styled.div`
	position: fixed;
	width: 100%;
	/* aspect-ratio: 2; */
	height: 100%;
	z-index: -1;
	top: 0;
`;

const Main = styled.main`
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>NDRT Studio</title>
				<meta name="description" content="Gianluca Andretta" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AbsoluteBackground></AbsoluteBackground>

			<Main className="NDRT__main">
				<Navbar />
				{children}
			</Main>
		</>
	);
}
