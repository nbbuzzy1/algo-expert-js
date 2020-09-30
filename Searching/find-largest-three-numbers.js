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
	let largestThreeNumbers = [array[0], array[1], array[2]].sort((a, b) => a - b);
	if (array.length === 3) return largestThreeNumbers
	
	for (let i = array.length - 1; i > 2; i--) {
		if (array[i] >= largestThreeNumbers[2]) {
			const temp = largestThreeNumbers[2]
			const temp2 = largestThreeNumbers[1]
			largestThreeNumbers[2] = array[i];
			largestThreeNumbers[1] = temp;
			largestThreeNumbers[0] = temp2;
		} else if (array[i] >= largestThreeNumbers[1]) {
			const temp = largestThreeNumbers[1]
			largestThreeNumbers[1] = array[i];
			largestThreeNumbers[0] = temp;
		} else if (array[i] >= largestThreeNumbers[0]) {
			largestThreeNumbers[0] = array[i];
		}
	}
	
	return largestThreeNumbers;
}