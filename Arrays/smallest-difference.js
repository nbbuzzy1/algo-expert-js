// Write a function that takes in two non-empty arrays of integers, finds the
// pair of numbers (one from each array) whose absolute difference is closest to
// zero, and returns an array containing these two numbers, with the number from
// the first array in the first position.

// You can assume that there will only be one pair of numbers with the smallest
// difference.

// Sample Input
// [-1, 5, 10, 20, 28, 3]
// [26, 134, 135, 15, 17]

// Sample Output
// [28, 26]

function smallestDifference(arrayOne, arrayTwo) {
	// Write your code here.
	  const sortArray = (array) => array.sort((a, b) => a - b);
	  const sortedArrayOne = sortArray(arrayOne);
	  const sortedArrayTwo = sortArray(arrayTwo);
	  
	  
	  const returnAbsoluteNumber = (num1, num2) => {
		  return num1 - num2 < 0 ? num2 - num1 : num1 - num2;
	  }
	  
	// for (let i = 0; i < sortedArrayOne.length; i++) {
	// 	  if 
	//   }
	  
  }