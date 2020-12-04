import upperFirst from './upperFirst.js'
import castArray from './castArray.js'

test('convert "test string" into "Test string" and then convert it into array', () => {
	expect(castArray(upperFirst("test string"))).toEqual(["Test string"]);
});
