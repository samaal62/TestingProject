import isEmpty from './isEmpty.js'

const testArray = [];

test('check if empty array is empty', () => {
	expect(isEmpty(testArray)).toBe(true);
});

test('check if array with only space is empty', () => {
	expect(isEmpty([ ])).toBe(true);
});

test('check if array with numbers is not empty', () => {
	expect(isEmpty([1, 2, 3])).toBe(false);
});

test('check if array with a null value is not empty', () => {
	expect(isEmpty([null])).toBe(false);
});