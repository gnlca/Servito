import { useEffect, useState } from 'react';

const useObserver = (
	ref: React.RefObject<HTMLDivElement> | null,
	options: IntersectionObserverInit = { rootMargin: '0px', threshold: 1.0 },
) => {
	const [isStuck, setIsStuck] = useState(false);
	const Observe = (
		intersection: React.RefObject<HTMLDivElement> | null,
		callback: (state: boolean) => void,
		options?: IntersectionObserverInit,
	) => {
		const intElement = intersection?.current;
		const observer = new IntersectionObserver(([e]) => {
			callback(e.isIntersecting);
		}, options);

		intElement && observer.observe(intElement);

		return () => {
			intElement && observer.unobserve(intElement);
		};
	};

	useEffect(() => {
		return Observe(ref, setIsStuck, options);
	}, [ref, options]);

	return isStuck;
};

export default useObserver;
