import isObjectLike from './isObjectLike.js'

test('check if the string "test" is not considered object', () => {
	expect(isObjectLike('test')).toBe(false);
});

test('check if the the array [1,2,3] is considered object', () => {
	expect(isObjectLike([1,2,3])).toBe(true);
});

test('check that function is not considered object', () => {
	expect(isObjectLike(() => { return "hello there"; })).toBe(false);
});
