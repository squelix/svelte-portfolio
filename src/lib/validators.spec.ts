import { validateEmail } from '$lib/validators';

describe('Validators', () => {
	describe('validateEmail', () => {
		test('should return true if email is valid', () => {
			expect(validateEmail('jfgdkjfgdfkjg3424534534@gmail.com')).toBe(true);
		});

		test('should return true if email is not valid', () => {
			expect(validateEmail('jfgdkjfgdfkjg3424534534shfhfgkhgfhkj')).toBe(false);
		});
	});
});
