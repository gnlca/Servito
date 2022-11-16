import Link from 'next/link';
import styled from 'styled-components';

import NDRTimg from '../assets/icons/logo.svg';
import { justifyCenter, noMarginPadding, spaceBetween } from '../styles/common';
import ThemeToggle from './ThemeToggle';

const Nav = styled.div`
	${spaceBetween}
	position: sticky;
	top: 0;
	padding: 1.5rem 2rem;
	margin-bottom: 2rem;
	background-color: rgba(var(--dark), var(--dark), var(--dark), 0.3);
	backdrop-filter: saturate(180%) blur(20px);
	border-bottom: 1px solid rgba(var(--luminosity), var(--luminosity), var(--luminosity), 0.1);
	transition: top 0.3s ease;
`;
const NavContent = styled.div`
	${spaceBetween}
	width: 100%;
	max-width: 50rem;
	margin: 0 auto;
`;

const Logo = styled(NDRTimg)`
	fill: var(--bianco);
	width: 5rem;
`;

const Ul = styled.ul`
	${noMarginPadding}
	${justifyCenter}
	list-style: none;
`;
const Li = styled.li`
	margin-right: 1rem;
	display: inline;
	a {
		text-decoration: none;
		color: inherit;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<NavContent>
				<Link href={'/'}>
					<Logo />
				</Link>
				<Ul>
					<Li>
						<Link href={'/blog'}>blog</Link>
					</Li>
					{/* <Li>
						<Link href={'/blog'}>work</Link>
					</Li> */}
					<Li>
						<Link href={'/contacts'}>contacts</Link>
					</Li>

					<ThemeToggle />
				</Ul>
			</NavContent>
		</Nav>
	);
};

export default Navbar;
