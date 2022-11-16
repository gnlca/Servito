/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { Theme } from '../types/theme';

type AppStateType = {
	theme: Theme;
};

const initialAppState: AppStateType = {
	theme: {
		value: false,
		setTheme: () => {},
		toggleTheme: () => {},
	},
};

const AppState = createContext<AppStateType>(initialAppState);

type AppProviderProps = {
	children: JSX.Element;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	const [theme, setTheme] = useState<boolean>(false);
	const toggleTheme = () => setTheme((prevTheme) => !prevTheme);
	const appState: AppStateType = {
		theme: {
			value: theme,
			setTheme,
			toggleTheme,
		},
	};

	return <AppState.Provider value={appState}>{children}</AppState.Provider>;
};
