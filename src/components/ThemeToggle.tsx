import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/common';
import useTheme from './useTheme';

const ThemeButton = styled(Button)`
	text-decoration: underline;
`;

export default function ThemeToggle(): ReactElement {
	const [theme, toggleTheme] = useTheme();

	return (
		<ThemeButton className="NDRT__theme-toggle-button" onClick={toggleTheme}>
			{/* {theme ? '🌙' : '🔆'} */}
			{theme ? 'dark' : 'light'}
		</ThemeButton>
	);
}
