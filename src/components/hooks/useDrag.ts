import React, { useCallback, useEffect, useState } from 'react';

export type Position = {
	x: number;
	y: number;
};

type CheckMove = (x: Position['x'], movementX: MouseEvent['movementX']) => Position['x'];

const useDrag = (
	targetRef: React.RefObject<HTMLDivElement>,
	handleOnRelease: () => void,
	checkX: CheckMove = (x, m) => x + m,
	checkY: CheckMove = (y, m) => y + m,
) => {
	const { innerWidth, innerHeight } = window;
	const initialPosition: Position = { x: 0, y: 0 };
	const [isSelected, setIsSelected] = useState(false);
	const [{ x, y }, setPosition] = useState<Position>(initialPosition);

	const resetPos = (position = initialPosition) => setPosition(position);

	const onMove = useCallback(
		(e: PointerEvent) => {
			isSelected &&
				setPosition(({ x, y }) => ({
					x: checkX(x, e.movementX),
					y: checkY(y, e.movementY),
				}));
		},
		[isSelected, checkX, checkY],
	);

	const onRelease = useCallback(() => {
		setIsSelected(false);
		handleOnRelease();
	}, [handleOnRelease]);

	//Target element events
	const target = targetRef.current;
	useEffect(() => {
		const events = ['mousedown', 'touchstart'];
		if (target) {
			const onDrag = (e: Event) => {
				e.preventDefault();
				setIsSelected(true);
			};
			events.map((e) => target.addEventListener(e, onDrag));
			return () => {
				events.map((e) => target.removeEventListener(e, onDrag));
			};
		}
	}, [target]);

	//Document events
	useEffect(() => {
		const events = ['mouseup', 'touchend'];
		events.map((e) => document.addEventListener(e, onRelease));
		document.addEventListener('pointermove', onMove);
		return () => {
			events.map((e) => document.removeEventListener(e, onRelease));
			document.removeEventListener('pointermove', onMove);
		};
	}, [onMove, onRelease]);

	return { x, y, isSelected, resetPos, innerHeight, innerWidth };
};

export default useDrag;
