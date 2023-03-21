import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
	let yearArray = data.asteroids.map(function (asteroid) {
		return asteroid.discoveryYear;
	});
	
	return yearArray.reduce(function (total, current) {
		let length1 = yearArray.filter(function (num) {return num === total;}).length
		let length2 = yearArray.filter(function (num) {return num === current;}).length
		
		if (length1 < length2) {
			return current;
		} else {
			return total;
		}
	});
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
