// Write a function that takes in an array of integers and returns a boolean
// representing whether the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are
// entirely non-increasing or entirely non-decreasing.

// Note that empty arrays and arrays of one element are monotonic.

// Sample Input
// [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

// Sample Output
// true

function isMonotonic(array) {
	// Write your code here.
	if (!array.length || array.length === 1) {
		return true;
	}
	
	let isIncreasing;
	let previous = array[0];
	
	for (let i = 1; i < array.length; i++) {
		const current = array[i];
		
		if (isIncreasing === undefined && previous !== current) {
			isIncreasing = current > previous;
		}
		
		if (isIncreasing) {
			if (previous > current) {
				return false;
			}
		} else if (isIncreasing === false) {
			if (previous < current) {
				return false;
			}
		}
		
		previous = array[i]
	}
	
	return true;
}

//Alternate solution
function isMonotonic(array) {
// Write your code here.
	let isNonDecreasing = true;
	let isNonIncreasing = true;
	
	for (let i = 1; i < array.length; i++) {
		if (array[i] < array[i - 1]) isNonDecreasing = false;
		if (array[i] > array[i - 1]) isNonIncreasing = false;
	}
	
	return isNonDecreasing || isNonIncreasing;
}