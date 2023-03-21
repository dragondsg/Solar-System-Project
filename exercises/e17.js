export function minBy(array, cb) {
	let result = array[0];
	
	for (let elm of array) {
		if (cb(elm) < cb(result)) {
			result = elm;
		}
	}
	
	return result;
}

export function maxBy(array, cb) {
	let result = array[0];
	
	for (let elm of array) {
		if (cb(elm) > cb(result)) {
			result = elm;
		}
	}
	
	return result;
}
