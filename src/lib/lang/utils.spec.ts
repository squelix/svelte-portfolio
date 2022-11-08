import { getLanguage } from '$lib/lang/utils';

describe('Lang Utils', () => {
	describe('getLanguage', () => {
		test('should get a handled language', () => {
			expect(getLanguage('fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5')).toEqual('fr');
			expect(getLanguage('en-GB, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5')).toEqual('en');
		});

		test('should fallback to en if language is not supported', () => {
			expect(getLanguage('q=0.8, de;q=0.7, *;q=0.5')).toEqual('en');
		});
	});
});
