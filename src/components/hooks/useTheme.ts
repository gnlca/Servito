import { useEffect, useState } from 'react';

type UseTheme = () => [theme: boolean, toggleTheme: () => void];

const useTheme: UseTheme = () => {
	//non posso prelevare il valore dal localstorage da qui perchè non viene eseguito nel browser ma serverside (in next.js)
	const [theme, setTheme] = useState<boolean>(false);
	const THEME_KEY = 'NDRT__theme';

	const toggleTheme = () => setTheme((prevTheme) => !prevTheme);

	//Riferimento
	//false = light theme
	//true = dark theme

	//Quando il componente viene renderizzato sul real dom e quindi posso accedere al localstorage del browser
	useEffect(() => {
		const localTheme = localStorage.getItem(THEME_KEY);
		if (localTheme != null) {
			setTheme(JSON.parse(localTheme));
		} else {
			setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(THEME_KEY, JSON.stringify(theme));
		if (theme) {
			document.documentElement.style.setProperty('--luminosity', '255');
		} else {
			document.documentElement.style.setProperty('--luminosity', '0');
		}
	}, [theme]);

	return [theme, toggleTheme];
};

export default useTheme;
