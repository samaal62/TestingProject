import defaultTo from './defaultTo.js'

test('does not convert empty string into "empty"', () => {
	expect(defaultTo('','empty')).toEqual('');
});

test('converts a null value into "empty"', () => {
	expect(defaultTo(null,'empty')).toEqual('empty');
});

test('does not convert a NaN into "empty"', () => {
	expect(defaultTo(NaN,'empty')).toEqual(NaN);
});

test('converts undefined into "empty"', () => {
	expect(defaultTo(undefined,'empty')).toEqual('empty');
});