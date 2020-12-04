import ceil from './ceil.js'

test('converts 5 into 5.00', () => {
	expect(ceil(5, 2)).toBe(5.00);
});

test('converts 55.974 into 55.98', () => {
	expect(ceil(55.974, 2)).toBe(55.98);
});

test('converts 0.0345 into 0.04', () => {
	expect(ceil(0.0345, 2)).toBe(0.04);
});