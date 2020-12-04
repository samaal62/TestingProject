import add from './add.js'

test('6+4 should equal 10', () => {
	expect(add(6, 4)).toBe(10);
});

test('500000+600000 should equal 1100000', () => {
	expect(add(500000, 600000)).toBe(1100000);
});

test('5.4 + 4.3 should equal 9.7', () => {
	expect(add(5.4, 4.3)).toBe(9.7);
});

test('0.342890 + 0.12 should equal 0.46289', () => {
	expect(add(0.342890, 0.12)).toBeCloseTo(0.46289);
});

test('0.003 + 0 should equal 0.003', () => {
	expect(add(0.003, 0)).toBe(0.003);
});

test('1.45 + (-94) should equal (-92.55)', () => {
	expect(add(1.45, -94)).toBe(-92.55);
});

test('test + 5 should equal test5', () => {
	expect(add('test', 5)).toBe('test5');
});