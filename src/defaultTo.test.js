import defaultTo from './defaultTo.js'

test('fails to convert empty string into "empty"', () => {
	expect(defaultTo('','empty')).not.toEqual('empty');
});

test('converts a null value into "empty"', () => {
	expect(defaultTo(null,'empty')).toEqual('empty');
});

test('fails to convert a NaN into "empty"', () => {
	expect(defaultTo(NaN,'empty')).not.toEqual('empty');
});

test('converts undefined into "empty"', () => {
	expect(defaultTo(undefined,'empty')).toEqual('empty');
});