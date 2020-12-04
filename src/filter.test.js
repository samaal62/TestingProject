import filter from './filter.js'

const testArray = [1, 2, 3, 4];

/*test('filter the value 3 out from [1, 2, 3, 4]', () => {
	expect(filter(testArray, ({value}) => return value != 3)).toEqual([1, 2, 4]);
});*/

const users = [
	{ 'user': 'barney', 'active': true },
	{ 'user': 'fred',   'active': false }
]

test('filter inactive users from the array', () => {
	expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }]);
});
