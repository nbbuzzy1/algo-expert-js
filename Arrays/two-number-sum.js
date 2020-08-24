
//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.


// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.


// You can assume that there will be at most one pair of numbers summing up to
// the target sum.

const twoNumberSum = (array, targetSum) => {
	let answer = [];
	const hash = {};
	
	//Store in hash
	array.forEach((item) => hash[item] = item);

	//Loop through and check hash for number needed
	for (let i = 0; i < array.length; i++) {
		const currentNumber= array[i];
		const numberNeeded = targetSum - currentNumber;
		
		if (hash[numberNeeded] !== undefined && hash[numberNeeded] !== currentNumber) {
			answer.push(currentNumber);
			answer.push(numberNeeded);

			return answer;
		}
	}
	
	return answer;
}
  