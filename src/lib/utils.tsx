export function easeInOutExpo(x: number): number {
	if (x == 0 || x == 1) {
		return x;
	}
	if (x < 0.5) {
		return Math.pow(2, 20 * x - 10) / 2;
	} else {
		return (2 - Math.pow(2, -20 * x + 10)) / 2;
	}
}
