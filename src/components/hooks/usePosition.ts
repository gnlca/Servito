import { useEffect, useState } from 'react';

export type Position = {
	x: number;
	y: number;
};

export const usePosition = () => {
	const intialPosition: Position = {
		x: 0,
		y: 0,
	};
	const [position, setPosition] = useState<Position>(intialPosition);

	const { innerWidth, innerHeight } = window;
	const windowDimension = { innerWidth, innerHeight };

	useEffect(() => {
		window.onmousemove = (e: MouseEvent) =>
			setPosition({
				x: e.clientX,
				y: e.clientY,
			});

		return () => {
			window.onmousemove = null;
		};
	}, []);

	return { position, windowDimension };
};
