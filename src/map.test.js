import map from './map.js'

function multiply(n){
	return n * 2
}

function filter(n){
	if(n == 2){
		return null
	}else{
		return n
	}
}

const testArray = [1,2,3];

test('each value is doubled in array [1,2,3] into [2,4,6]', () => {
	expect(map(testArray, multiply)).toEqual([2,4,6]);
});

test('2 is removed from the array [1,2,3] and replaced with null', () => {
	expect(map(testArray, filter)).toEqual([1,null,3]);
});