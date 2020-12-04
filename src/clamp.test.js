import clamp from './clamp.js'

test('limit 10 into range -5-5', () => {
	expect(clamp(10, 5, -5)).toBe(5);
});

test('limit 3 into range 1-10', () => {
	expect(clamp(3, 10, 1)).toBe(3);
});

test('limit 0.0345 into range 0.0698-0.1345', () => {
	expect(clamp(0.0345, 0.1345, 0.0698)).toBe(0.0698);
});