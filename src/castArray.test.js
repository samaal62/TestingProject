import castArray from './castArray.js'

test('converts 5 into [5]', () => {
	expect(castArray(5)).toEqual([5]);
});

test('converts "Test" into ["Test"]', () => {
	expect(castArray('Test')).toEqual(['Test']);
});

const value = {test: 1};

test('converts variable into array containing it', () => {
	expect(castArray(value)).toEqual([value]);
});