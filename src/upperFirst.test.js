import upperFirst from './upperFirst.js'

test('test converted into Test', () => {
	expect(upperFirst('test')).toEqual('Test');
});

test('"full sentence for testing" converted into "Full sentence for testing"', () => {
	expect(upperFirst('full sentence for testing')).toEqual('Full sentence for testing');
});

test('"RaNdoM uPperCase lEtteRs" converted into "RaNdoM uPperCase lEtteRs"', () => {
	expect(upperFirst('RaNdoM uPperCase lEtteRs')).toEqual('RaNdoM uPperCase lEtteRs');
});