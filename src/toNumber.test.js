import toNumber from './toNumber.js'

test('try to convert a number string "3" into number', () => {
	expect(toNumber('3')).toBe(3);
});

test('try to convert a number array [3] into number', () => {
	expect(toNumber([3])).toBe(3);
});

test('try that number 3 remains unchanged', () => {
	expect(toNumber(3)).toBe(3);
});