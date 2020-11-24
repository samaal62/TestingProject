import add from './add.js'

test('adds 6+4 to equal 10', () => {
	expect(add(6, 4)).toBe(10);
});

test('adds 500+400 to equal 900', () => {
	expect(add(500, 400)).toBe(900);
});