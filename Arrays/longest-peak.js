// Write a function that takes in an array of integers and returns the length of
// the longest peak in the array.

// A peak is defined as adjacent integers in the array that are strictly
// increasing until they reach a tip (the highest value in the peak), at which
// point they become strictly decreasing. At least three integers are required to
// form a peak.

// For example, the integers 1, 4, 10, 2 form a peak, but the
// integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. 
// Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.

// Sample Input
// [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

// Sample Output
// 6 // 0, 10, 6, 5, -1, -3

function longestPeak(array) {
	// Write your code here.
	if (!array.length || array.length < 2 || array.length === 2 && array[0] == array[1]) {
		return 0;
	}
	
	const evaluateDirection = (num1, num2) => {
		const diff = num2 - num1;
		if (diff === 0) {
			return 'equal'
		} else if (diff > 0) {
			return 'increasing'
		} else {
			return 'decreasing'
		}
	}
	
	let peakCounter = 0;
	let longestPeak = 0;
	let previousDirection;
	let hasPeaked = false;
	
	for (let i = 1; i < array.length; i++) {
		let previous = array[i - 1];
		let current = array[i];
		let currentDirection = evaluateDirection(previous, current);
		
		if (currentDirection === 'equal') {
			if (previousDirection === 'decreasing' && peakCounter > longestPeak) {
				longestPeak = peakCounter;
			}
			peakCounter = 0;
			hasPeaked = false;
		} else {
			if (previousDirection === 'increasing' && currentDirection === 'decreasing') {
				hasPeaked = true;
			}
			if (previousDirection === 'decreasing' && currentDirection === 'increasing') {
				if (hasPeaked && peakCounter > longestPeak) {
					longestPeak = peakCounter;
				}
				hasPeaked = false;
				peakCounter = 2;
			} else if (currentDirection === 'decreasing' && i === array.length -1) {
				peakCounter++;
				if (hasPeaked && peakCounter > longestPeak) {
					longestPeak = peakCounter;
				}
			} else {
				if (!peakCounter) {
					peakCounter = 2;
				} else {
					peakCounter++;
				}
			}
		}

		previousDirection = currentDirection;
	}

	return longestPeak;
}