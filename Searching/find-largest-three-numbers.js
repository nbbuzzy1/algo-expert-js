
// Write a function that takes in an array of at least three integers and,
// without sorting the input array, returns a sorted array of the three largest
// integers in the input array.

// The function should return duplicate integers if necessary; for example, it
// should return <span>[10, 10, 12]</span> for an input array of
// <span>[10, 5, 9, 10, 12]

// Sample Input
// [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

// Sample Output
// [18, 141, 541]

function findThreeLargestNumbers(array) {
// Write your code here.
	let largestThreeNumbers = [];
	
	array.forEach((num) => {
		if (largestThreeNumbers.length > 2) {
			if (num >= largestThreeNumbers[0]) {
				largestThreeNumbers[0] = num;
			} else if (num >=  largestThreeNumbers[1]) {
				largestThreeNumbers[1] = num;
			} else if (num >=  largestThreeNumbers[2]) {
				largestThreeNumbers[2] = num;
			}
		} else {
			largestThreeNumbers.push(num)
		}

		largestThreeNumbers = largestThreeNumbers.sort((a, b) => a - b);
	});

	return largestThreeNumbers;
}