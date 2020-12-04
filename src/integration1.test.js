import add from './add.js'
import ceil from './ceil.js'

test('round numbers up to 2 decimal accuracy after addition', () => {
	expect(ceil(add(2.984004, 0.9735402), 2)).toBe(3.96);
});

test('round numbers up to 2 decimal accuracy before addition', () => {
	expect(add(ceil(2.984004, 2), ceil(0.9735402, 2))).toBe(3.97);
});