// see e16.md

export function find(array, callback) {
	let result;
	
	for (let elm of array) {
		if (callback(elm)) {
			result = elm;
			break;
		}
	}
	
	return result;
}
