import { UnicodeBarStyle, UnicodeBarStyleEnum } from '$models/unicode-bar-style.enum';

const repeatToBuildBar = (str: string, i: number): string => {
	let r = '';
	for (let j = 0; j < i; j++) {
		r += str;
	}
	return r;
};

export const generateUnicodeBar = (
	percent: number,
	minSize = 1,
	maxSize = 20,
	barStyleEnum = UnicodeBarStyleEnum['□◱◧▣■']
): string | undefined => {
	const barStyle = UnicodeBarStyle[barStyleEnum];
	const fullSymbol = barStyle[barStyle.length - 1];
	const barStyleMaxIndex = barStyle.length - 1;
	let str: string | undefined = undefined;
	let minDelta = Number.POSITIVE_INFINITY;

	if (percent == 100) {
		return repeatToBuildBar(fullSymbol, 10);
	}
	percent = percent / 100;

	for (let i = maxSize; i >= minSize; i--) {
		const currentPercent = percent * i;
		const full = Math.floor(currentPercent);
		const rest = currentPercent - full;
		let middle = Math.floor(rest * barStyleMaxIndex);

		if (percent != 0 && full == 0 && middle == 0) {
			middle = 1;
		}

		const d = Math.abs(percent - (full + middle / barStyleMaxIndex) / i) * 100;

		if (d < minDelta) {
			minDelta = d;
			let m = barStyle[middle];
			if (full == i) {
				m = '';
			}
			str = `${repeatToBuildBar(fullSymbol, full)}${m}${repeatToBuildBar(
				barStyle[0],
				i - full - 1
			)}`;
		}
	}
	return str;
};
